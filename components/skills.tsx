"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Eye, Microscope, Leaf, Code, Database, Server, Network } from "lucide-react"

const skillCategories = [
  {
    name: "Artificial Intelligence",
    icon: Brain,
    skills: ["Deep Learning", "Neural Networks", "Machine Learning", "Natural Language Processing", "Computer Vision"],
  },
  {
    name: "Computer Vision",
    icon: Eye,
    skills: ["Image Processing", "Object Detection", "Image Segmentation", "Feature Extraction", "Visual Recognition"],
  },
  {
    name: "Healthcare AI",
    icon: Microscope,
    skills: [
      "Medical Image Analysis",
      "Disease Detection",
      "Diagnostic Systems",
      "Healthcare Analytics",
      "Clinical Decision Support",
    ],
  },
  {
    name: "Agriculture AI",
    icon: Leaf,
    skills: [
      "Crop Disease Detection",
      "Yield Prediction",
      "Smart Farming",
      "Plant Phenotyping",
      "Agricultural Analytics",
    ],
  },
  {
    name: "Programming",
    icon: Code,
    skills: ["Python", "TensorFlow", "PyTorch", "Keras", "OpenCV", "MATLAB"],
  },
  {
    name: "Data Science",
    icon: Database,
    skills: [
      "Data Analysis",
      "Statistical Modeling",
      "Data Visualization",
      "Feature Engineering",
      "Exploratory Data Analysis",
    ],
  },
  {
    name: "Research",
    icon: Server,
    skills: ["Scientific Writing", "Experimental Design", "Literature Review", "Research Methodology", "Peer Review"],
  },
  {
    name: "Teaching",
    icon: Network,
    skills: [
      "Curriculum Development",
      "Student Mentoring",
      "Course Design",
      "Educational Technology",
      "Academic Assessment",
    ],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Technical competencies and specialized knowledge areas
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">{category.name}</h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

