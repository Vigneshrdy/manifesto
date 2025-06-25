"use client"

import type React from "react"
import { Users, Calendar, Lightbulb, Target, BookOpen, Heart } from "lucide-react"
import Image from "next/image"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { PremiumContact } from "@/components/ui/premium-contact"
import { cn } from "@/lib/utils"

const manifestoItems = [
  {
    icon: <Calendar className="h-4 w-4" />,
    title: "Regular Meetups",
    description: "Organize regular meetups and bonding activities in various parts of the region.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    icon: <Users className="h-4 w-4" />,
    title: "Active Regional Group",
    description: "Build an active regional group for Saranda House students with monthly online/offline interactions.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    icon: <Target className="h-4 w-4" />,
    title: "Transparent Representation",
    description: "Represent regional issues and suggestions in the Student Council transparently.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    icon: <Heart className="h-4 w-4" />,
    title: "Foster Collaboration",
    description: "Foster collaboration among students from different parts of Telangana and Andhra Pradesh.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    icon: <Lightbulb className="h-4 w-4" />,
    title: "Promote Participation",
    description: "Promote Saranda House participation in events, initiatives, and challenges.",
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]",
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    title: "Learning Resources",
    description: "Share learning resources and conduct study groups for Foundation and Diploma level peers.",
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/13]",
  },
]

interface ManifestoItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
}

const ManifestoItem = ({ area, icon, title, description }: ManifestoItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-blue-50 p-2">
              <div className="text-blue-600">{icon}</div>
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                    Tadasina Saivignesh Reddy
                  </h1>
                  <p className="text-lg text-blue-200 font-medium mb-4">
                    Nominee for RC of Saranda House Hyderabad (AP and Telangana) Region
                  </p>
                  <p className="text-2xl text-blue-100 font-medium">Together, Let's Build a Stronger Region</p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-xl opacity-50 scale-110"></div>
                  <Image
                    src="/candidate-photo.jpg"
                    width={320}
                    height={320}
                    alt="Tadasina Saivignesh Reddy"
                    className="relative rounded-full border-4 border-white/30 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm Tadasina Saivignesh Reddy, a Diploma-level IITM BS student from Hyderabad. I'm passionate about
                building an active, connected student community across Telangana and Andhra Pradesh. I aim to represent
                our region with dedication and ensure every voice is heard.
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="w-full py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-gray-900">Our Manifesto</h2>
              <p className="text-lg text-gray-600">Building a stronger student community together</p>
            </div>

            <div className="max-w-7xl mx-auto">
              <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[50rem] xl:grid-rows-2">
                {manifestoItems.map((item, index) => (
                  <ManifestoItem
                    key={index}
                    area={item.area}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <PremiumContact />

        {/* Call to Action */}
        <section className="w-full py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold">Together, Let's Build a Stronger Region</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Your support matters in creating a vibrant student community that connects, learns, and grows together.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">© 2024 Tadasina Saivignesh Reddy Campaign. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
