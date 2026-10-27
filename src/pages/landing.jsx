import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import defaultCompanies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabaseClient from "@/utils/supabase";

const LandingPage = () => {
  const [companiesList, setCompaniesList] = useState(defaultCompanies);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const supabase = await supabaseClient();
        const { data: dbCompanies, error } = await supabase
          .from("companies")
          .select("id, name, logo_url");

        if (error) {
          console.error("Error fetching companies for carousel:", error);
          return;
        }

        if (dbCompanies && dbCompanies.length > 0) {
          const validDbCompanies = dbCompanies
            .filter((c) => c.logo_url && !c.logo_url.endsWith(".txt"))
            .map((c) => ({
              id: `supabase-${c.id}`,
              name: c.name,
              path: c.logo_url,
            }));

          const seen = new Set();
          const merged = [];

          for (const comp of validDbCompanies) {
            const lowerName = comp.name.trim().toLowerCase();
            if (!seen.has(lowerName)) {
              seen.add(lowerName);
              merged.push(comp);
            }
          }

          for (const comp of defaultCompanies) {
            const lowerName = comp.name.trim().toLowerCase();
            if (!seen.has(lowerName)) {
              seen.add(lowerName);
              merged.push(comp);
            }
          }

          setCompaniesList(merged);
        }
      } catch (err) {
        console.error("Error loading carousel companies:", err);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companiesList.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-2xl sm:max-w-3xl relative">
          <img
            src="/banner.jpeg"
            alt="Hirrd Banner"
            className="w-full rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.15)] drop-shadow-2xl border border-white/10"
          />
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
