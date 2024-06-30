import { Typography} from '@mui/material';
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cloud Native App</title>
        <meta name="description" content="Cloud Native App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Typography variant='h1' component="h1">
          Welcome to Cloud Native App
        </Typography>
      </div>
    </div>
  );
}
