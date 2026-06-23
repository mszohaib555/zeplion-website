"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS, SITE } from "@/lib/constants";

export function Portfolio() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Current <span className="text-[#00A3FF]">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real work in progress and recently delivered — honest updates on what
            we&apos;re building right now.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-[#00A3FF]/40"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === "Delivered"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-[#00A3FF]/10 text-[#00A3FF]"
                  }`}
                >
                  {project.status} {project.statusIcon}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            className="border-[#00A3FF]/30 hover:bg-[#00A3FF]/10"
          >
            <Link href="/contact" data-track="cta-portfolio">
              {SITE.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
