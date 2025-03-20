"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar } from "lucide-react"

const volunteering = [
  {
    position: "President",
    organization: "RMEDU Student Club",
    period: "Jan 2019 - Jan 2022",
    duration: "3 yrs",
  },
  {
    position: "President",
    organization: "Shahidullah Hall Language Club",
    period: "Jan 2021 - Jan 2022",
    duration: "1 yr",
  },
  {
    position: "Advisor",
    organization: "Shahidullah Hall Language Club",
    period: "Sep 2022 - Present",
    duration: "2 yrs 7 mos",
  },
  {
    position: "Advisor",
    organization: "BADHAN",
    period: "Sep 2022 - Present",
    duration: "2 yrs 7 mos",
    location: "Shahidullah Hall, University of Dhaka, Dhaka, Bangladesh",
  },
  {
    position: "Executive Committee Member",
    organization: "Dhaka University Science Society (DUSS)",
    period: "Jan 2018 - Jan 2019",
    duration: "1 yr",
  },
  {
    position: "Convenor of Special Subcommittee for English Sessions",
    organization: "Shahidullah Hall Debating Club (SHDC)",
    period: "Jan 2018 - Jan 2019",
    duration: "1 yr",
  },
  {
    position: "Judge",
    organization: "Bangladesh Robot Olympiad",
    period: "Jan 2022 - Present",
    duration: "3 yrs 3 mos",
  },
]

export default function Volunteering() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="volunteering" ref={ref} className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Volunteering</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">Community engagement and leadership roles</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteering.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.position}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{item.organization}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>
                      {item.period} · {item.duration}
                    </span>
                  </div>
                  {item.location && <p className="text-sm text-muted-foreground">{item.location}</p>}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

