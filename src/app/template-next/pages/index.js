import React from "react";

export default function Home({ site }) {
  const words = ["Quick", "Fast", "Speedy"];
  const word = words[Math.floor(Math.random() * words.length)];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{word} delivery service in dhaka.</h1>
      <p>Phone: {site.phone}</p>
      <p>Address: {site.address}</p>
    </div>
  );
}

// Dummy getStaticProps, will be replaced by API
export async function getStaticProps() {
  return { props: { site: { phone: "", address: "" } } };
}
