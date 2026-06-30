import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactForm from "@/components/contact/ContactForm";
import ContactOffice from "@/components/contact/ContactOffice";

export default function ContactPage() {
  return (
    <main className="bg-rich-black min-h-screen">
      <ContactHero />
      <ContactChannels />

      <section className="py-20 lg:py-32 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          <ContactForm />
          <ContactOffice />
        </div>
      </section>
    </main>
  );
}
