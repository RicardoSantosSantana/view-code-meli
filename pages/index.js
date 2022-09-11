import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+'-'+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();

  const [client_id, setClientId] = useState("")

  const submit = function (e) {
    e.preventDefault();

    const redirect_uri = "https://code.ricardo.dev.br"
    const url = `https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=rcx@fdf.dw`
    window.location = url;

    console.log(url)

  }

  const { query } = useRouter();
  console.log(query)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Code <a href="#">Mercado Livre</a>
        </h1>
        <p>
        {date}
        </p>
        <p className={styles.description}>
          {query?.code}
        </p>
        <form onSubmit={submit}>
          <label htmlFor="txt_client_id" style={{
            fontSize: "1.4em",
            display: 'block',
            paddingBottom: "20px"
          }
          }>Client ID</label>
          <textarea placeholder="insert client id here" cols="30" rows="5" style={{display: 'block',padding:"2px", marginBottom:"10px", fontSize:"1.1rem"}} type="text" onChange={(e) => setClientId(e.target.value)} id="txt_client_id" name="txt_client_id"></textarea>
          <button type="submit">Get Code</button>
        </form>
      </main >


    </div >
  )
}
