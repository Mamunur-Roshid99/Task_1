import fs from "fs";
import path from "path";
import csv from "csv-parser";

export async function POST(req) {
  try {
    const results = [];
    const csvPath = path.join(process.cwd(), "websites.csv");
    console.log("Checking CSV path:", csvPath);

    if (!fs.existsSync(csvPath)) throw new Error("CSV file not found");

    await new Promise((resolve, reject) => {
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => resolve())
        .on("error", (err) => reject(err));
    });

    console.log("CSV data read:", results);

    const templatePath = path.join(process.cwd(), "src/template-next");
    console.log("Checking template path:", templatePath);
    if (!fs.existsSync(templatePath))
      throw new Error("Template folder not found");

    for (const site of results) {
      const outDir = path.join(process.cwd(), "build", site.domain);
      console.log("Creating folder:", outDir);

      fs.mkdirSync(outDir, { recursive: true });
      fs.cpSync(templatePath, outDir, { recursive: true });

      console.log("Copied template for:", site.domain);
    }

    return new Response(
      JSON.stringify({ message: "CSV read & template copy done!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("API Error:", err);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
