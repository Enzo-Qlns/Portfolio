import { SimpleLayout } from '@/components/SimpleLayout'
import CardContact from '@/components/CardContact'

export const metadata = {
  title: 'Contact',
  description: 'Vous avez une question, une suggestion ou vous souhaitez simplement dire bonjour ? N’hésitez pas à me contacter.',
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Restons en contact ! 📬"
      intro="Vous avez une question, une suggestion ou vous souhaitez simplement dire bonjour ? N’hésitez pas à me contacter."
    >
      <div className="space-y-20">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="flex flex-col lg:gap-x-20 lg:flex-row">
            <div className={"w-full lg:w-1/2"}>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Contact
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                Quelques informations pour me contacter.
              </p>
            </div>
            <CardContact />
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
