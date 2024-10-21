'use client'

import { Container } from '@/components/Container'
import React from 'react'
import styles from '@/styles/bubble.module.css'

const BubbleText = ({ text }: { text: string }) => {
  return (
    <h2 className="relative z-20 font-thin">
      {text
        ? text
            .toString()
            .split('')
            .map((child, idx) => (
              <span className={styles.hoverText} key={idx}>
                {child}
              </span>
            ))
        : null}
    </h2>
  )
}

export function SimpleLayout({
  title,
  intro,
  animation,
  children,
}: {
  title: string
  intro: string
  animation?: boolean
  children?: React.ReactNode
}) {
  console.log(animation)
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <div className="z-20 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {animation ? (
            <BubbleText text={title} />
          ) : (
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              {title}
            </h1>
          )}
        </div>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
