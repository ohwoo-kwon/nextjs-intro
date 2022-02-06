import { useRouter } from "next/router";

export default function Detail() {
  const {
    query: { id },
  } = useRouter();
  return id ? id : null;
}
