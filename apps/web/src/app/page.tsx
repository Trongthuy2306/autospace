import { add } from '@autospace/sample-lib'
import Image from 'next/image'

export default function Home() {
  return <main>hello {add(33, 11)}</main>
}
