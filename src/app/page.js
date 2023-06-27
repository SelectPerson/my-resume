import Image from 'next/image'
import Section from "@/components/section";
import Header from "@/components/header";
import Name from "@/components/name";

export default function Home() {
  return (
    <main>
      <Header />
      <Name />
      <Section />
    </main>
  )
}
