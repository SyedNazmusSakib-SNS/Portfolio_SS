"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, BookOpen } from "lucide-react"
import Image from "next/image"

const education = [
  {
    degree: "MSc, Robotics and Mechatronics Engineering",
    institution: "University of Dhaka",
    period: "2020 - 2022",
    thesis: "Algorithms for Fast and Efficient Neural Architecture Search",
  },
  {
    degree: "BSc, Robotics and Mechatronics Engineering",
    institution: "University of Dhaka",
    period: "2016 - 2019",
    thesis: "Deep Learning in Medical Image Analysis",
  },
]

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" ref={ref} className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Education</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">My academic journey and qualifications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span className="text-sm">
                      <span className="font-medium">Thesis:</span> {item.thesis}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="University of Dhaka"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

