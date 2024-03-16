import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/es.svg" alt="Spanish" width={32} height={40} className="mr-4 rounded-md" />
          Hiszpański
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/cz.svg" alt="Czech" width={32} height={40} className="mr-4 rounded-md" />
          Czeski
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/jp.svg" alt="Japanese" width={32} height={40} className="mr-4 rounded-md" />
          Japoński
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/us.svg" alt="English" width={32} height={40} className="mr-4 rounded-md" />
          Angielski
        </Button>
      </div>
    </footer>
  )
}
