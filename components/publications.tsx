"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Calendar, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const publications = [
  {
    title: "Deep learning for mango leaf disease identification: A vision transformer perspective",
    journal: "Heliyon",
    date: "Aug 22, 2024",
    description:
      "Over the last decade, the use of machine learning in smart agriculture has surged in popularity. Deep learning, particularly Convolutional Neural Networks (CNNs), has been useful in identifying diseases in plants at an early stage. Recently, Vision Transformers (ViTs) have proven to be effective in image classification tasks. These architectures often outperform most state-of-the-art CNN models. However, the adoption of vision transformers in agriculture is still in its infancy. In this paper, we evaluated the performance of vision transformers in identification of mango leaf diseases and compare them with popular CNNs.",
    link: "#",
  },
  {
    title:
      "Deep learning-driven forward and inverse design of nanophotonic nanohole arrays: streamlining design for tailored optical functionalities and enhancing accessibility",
    journal: "RSC Nanoscale",
    date: "Aug 14, 2024",
    description:
      "This paper explores deep learning applications in nanophotonic design, focusing on streamlining the creation of nanohole arrays with specific optical properties.",
    link: "#",
  },
  {
    title: "Intracranial Hemorrhage Classification from CT Scan Using Deep Learning and Bayesian Optimization",
    journal: "IEEE",
    date: "Aug 1, 2023",
    description:
      "Intracranial hemorrhage is a medical condition characterized by bleeding within the skull or brain tissue. It has mainly five subtypes: epidural, subdural, subarachnoid, intraparenchymal, and intraventricular. To ensure a successful outcome for a patient, timely and accurate identification of intracranial hemorrhage is crucial. However, a shortage of radiologists, particularly in rural areas, can lead to a delay in diagnosis. In this work, we proposed an automatic way of identifying intracranial hemorrhage from a Computed Tomography (CT) scan.",
    link: "#",
  },
  {
    title:
      "BananaSqueezeNet: A Very Fast, Lightweight Convolutional Neural Network for Diagnosis of Three Prominent Banana Leaf Diseases",
    journal: "Elsevier",
    date: "Mar 9, 2023",
    description:
      "All over the world, bananas are one of the most common fruits. It accounts for nearly 16% of global fruit production. However, every year, a large amount of banana yield losses occur due to different diseases of the banana leaf. It is essential to identify these diseases at an early stage in order to increase banana production. A visual inspection is the most common method of identifying banana leaf diseases. With a visual inspection, errors are common, time is a factor, and expertise is required.",
    link: "#",
  },
  {
    title:
      "IGWO-SS: Improved Grey Wolf Optimization based on Synaptic Saliency for Fast Neural Architecture Search in Computer Vision",
    journal: "IEEE",
    date: "Jun 21, 2022",
    description:
      "Neural Architecture Search (NAS) is the process of automating the design of neural network architectures for a given task. Although NAS automates the process of finding suitable neural network architectures for a specific task, the existing NAS algorithms are immensely time-consuming. The main bottleneck in NAS algorithms is the training time for each architecture. This study proposes an Improved Grey Wolf Optimization based on Synaptic Saliency (IGWO-SS), which is much faster than the existing NAS algorithms and provides better final performance.",
    link: "#",
  },
]

export default function Publications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="publications" ref={ref} className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Publications</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Research papers published in peer-reviewed journals and conferences
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{publication.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>{publication.journal}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{publication.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{publication.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Read Paper
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

