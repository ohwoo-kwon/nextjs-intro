import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Detail() {
  const {
    query: { id, title },
  } = useRouter();
  useEffect(() => {
    (async () => {
      const data = await (await fetch(`/api/movies/${id}`)).json();
    })();
  });
  return (
    <div>
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}
