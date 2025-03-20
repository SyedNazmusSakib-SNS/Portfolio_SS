"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Brain, Eye, CloudLightning, TreesIcon as Lungs } from "lucide-react"

const projects = [
  {
    title: "Artificial Intelligence for Automated Brain Hemorrhage Detection from CT scans (AIBrainS)",
    period: "Oct 2021 - Jun 2022",
    organization: "University of Dhaka",
    description:
      "Developed an AI system to automatically detect brain hemorrhage from CT scans, improving diagnostic accuracy and speed.",
    skills: ["Healthcare", "Machine Learning", "Artificial Intelligence", "Computer Vision"],
    icon: Brain,
  },
  {
    title: "Deep Learning Approach to Detect Diabetic Macular Edema (DME) of Eye from OCT scans (DeepEye)",
    period: "Apr 2022 - Jun 2022",
    organization: "University of Dhaka",
    description:
      "Created a deep learning model to detect Diabetic Macular Edema from OCT scans, enabling early diagnosis of this sight-threatening condition.",
    skills: ["Healthcare", "Machine Learning", "Artificial Intelligence", "Computer Vision"],
    icon: Eye,
  },
  {
    title: "Deep Learning in Fighting Climate Change and Predicting Extreme Weather Events (DeepLEx)",
    period: "Jan 2021 - May 2021",
    organization: "University of Dhaka",
    description:
      "Applied deep learning techniques to predict extreme weather events and contribute to climate change mitigation strategies.",
    skills: ["Machine Learning", "Artificial Intelligence"],
    icon: CloudLightning,
  },
  {
    title: "Deep Learning in Pneumonia Detection from X-ray sample (DeepMoniaX)",
    period: "Jul 2020 - Dec 2020",
    organization: "University of Dhaka",
    description:
      "Developed a deep learning model to detect pneumonia from chest X-rays, improving diagnostic accuracy and accessibility.",
    skills: ["Healthcare", "Machine Learning", "Artificial Intelligence", "Computer Vision"],
    icon: Lungs,
  },
]

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Research Projects</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Innovative research at the intersection of AI, healthcare, and climate science
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground border-t pt-4">
                    Associated with {project.organization}
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

