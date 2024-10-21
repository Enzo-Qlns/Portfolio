'use client'

import { useState } from 'react'
import clsx from 'clsx'

function CloseXMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

function CardMail() {
  return (
    <div className="min-w-40 rounded-2xl border border-zinc-100 p-10 pr-20 dark:border-zinc-700/40 dark:bg-zinc-800 dark:text-zinc-100 z-20">
      <h3 className="text-base font-semibold leading-7 tracking-tight text-zinc-800 dark:text-zinc-100">
        Email 📧
      </h3>
      <dl className="mt-3 space-y-1 text-sm leading-6 text-zinc-800 hover:underline focus:outline-none dark:text-zinc-100">
        <div>
          <dd>
            <a
              href="mailto:equelenispro@gmail.com"
              target={'_blank'}
              className={'hover:underline'}
            >
              equelenispro@gmail.com
            </a>
          </dd>
        </div>
      </dl>
    </div>
  )
}

interface CardMapProps {
  setIsPlaceClicked: (value: boolean) => void
}

function CardMap({ setIsPlaceClicked }: CardMapProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-zinc-100 p-10 dark:border-zinc-700/40 dark:bg-zinc-800 dark:text-zinc-100 z-20',
      )}
    >
      <h3 className="text-base font-semibold leading-7 tracking-tight text-zinc-800 dark:text-zinc-100">
        Place 📍
      </h3>
      <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-200">
        <div>
          <dd>
            <button
              onClick={() => setIsPlaceClicked(true)}
              className="rounded-md text-zinc-800 hover:underline focus:outline-none dark:text-zinc-100"
            >
              Reims
            </button>
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default function CardContact() {
  const [isPlaceClicked, setIsPlaceClicked] = useState(false)

  return isPlaceClicked ? (
    <div className={'relative w-full z-20'}>
      <iframe
        className={'focus:outline-none focus:ring-0'}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Reims+(Reims)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{
          width: '100%',
          height: 'calc(100vh - 550px)',
          border: 0,
          boxShadow:
            '0px 0px 6.5px rgba(0, 0, 0, 0.044), 0px 0px 52px rgba(0, 0, 0, 0.08)',
          borderRadius: '18px',
          filter: 'contrast(129%) grayscale(100%) invert(100%)',
          backgroundColor: '#1f1f1f !important',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '8%',
          zIndex: 2,
        }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
      <button
        onClick={() => setIsPlaceClicked(false)}
        className={
          'absolute right-5 top-5 z-10 rounded-full border-2 border-zinc-100 bg-zinc-800 p-1 dark:bg-zinc-700/40'
        }
      >
        <CloseXMark />
      </button>
    </div>
  ) : (
    <div className="my-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
      <CardMail />
      <CardMap setIsPlaceClicked={setIsPlaceClicked} />
    </div>
  )
}
