"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Microscope, Cpu, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Passionate researcher and educator in Artificial Intelligence and Robotics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Shifat E Arman Bhuiyan"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-6">
              <p className="text-lg">
                I am a Lecturer at the University of Dhaka in the Department of Robotics and Mechatronics Engineering.
                I'm passionate about Artificial Intelligence and Machine Learning, with particular interests in
                healthcare and smart agriculture.
              </p>
              <p className="text-lg">
                My research includes developing AI-driven solutions for medical diagnostics and agricultural
                applications. As a Lecturer, I teach and mentor students while contributing to research projects in
                these areas.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Brain className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-medium">AI Research</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Microscope className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-medium">Healthcare AI</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Cpu className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-medium">Computer Vision</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <GraduationCap className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-medium">Education</h3>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

