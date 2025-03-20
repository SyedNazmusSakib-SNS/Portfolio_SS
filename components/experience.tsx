"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Lecturer, Department of Robotics and Mechatronics Engineering",
    company: "University of Dhaka",
    period: "Jun 2022 - Present",
    duration: "2 yrs 10 mos",
    type: "Full-time",
    skills: ["Artificial Intelligence", "Computer Vision", "Machine Learning"],
  },
  {
    title: "Contractual Lecturer, Department of Computer Science and Engineering",
    company: "BRAC University",
    period: "Apr 2022 - Jun 2022",
    duration: "3 mos",
    type: "Contract",
    skills: ["Teaching", "Computer Science"],
  },
  {
    title: "Visiting Research Assistant",
    company: "GIS & Remote Sensing Lab, Bangabandhu Sheikh Mujibur Rahman Agricultural University (BSMRAU)",
    period: "Jul 2021 - Sep 2021",
    duration: "3 mos",
    type: "Research",
    skills: ["Computer Vision", "Machine Learning"],
  },
  {
    title: "Research Assistant",
    company: "University of Dhaka",
    period: "Jul 2020 - May 2021",
    duration: "11 mos",
    type: "Part-time",
    skills: ["Artificial Intelligence", "Computer Vision", "Machine Learning"],
  },
  {
    title: "Artificial Intelligence System Design & Development Intern",
    company: "Datasoft Manufacturing & Assembly Inc. Ltd.",
    period: "Aug 2019 - Nov 2019",
    duration: "4 mos",
    type: "Internship",
    skills: ["Computer Vision", "Machine Learning"],
  },
]

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">My journey through academia and industry</p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start md:justify-center"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted-foreground/30 bg-card shadow-md text-primary z-10 md:absolute">
                <Building className="w-5 h-5" />
              </div>

              <Card className="ml-6 md:ml-0 md:max-w-xl md:mx-auto md:even:ml-[calc(50%+1rem)] md:odd:mr-[calc(50%+1rem)] w-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <Badge variant="outline">{experience.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Building className="mr-2 h-4 w-4" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>
                      {experience.period} · {experience.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

