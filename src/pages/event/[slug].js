import Layout from "@/components/Layout";
import { useRouter } from "next/router";

function Event() {
  const router = useRouter();

  const { slug } = router.query;
  return (
    <Layout>
      <h1>{slug}</h1>
    </Layout>
  );
}

export default Event;
