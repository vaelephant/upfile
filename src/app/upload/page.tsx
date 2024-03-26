'use client';

import { Input } from "@/components/ui/input"
import { useRef, useState } from 'react';
import styles from '.././page.module.css';
import { Button } from "@/components/ui/button"
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]
export default function page() {
  const [file, setFile] = useState<File>();
  const ref = useRef<HTMLInputElement>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    try {
      const data = new FormData();
      data.set('file', file);
      const res = await fetch('api/upload', {
        method: 'POST',
        body: data,
      });

      if (!res.ok) throw new Error(await res.text());

      ref.current && (ref.current.value = '');

    } catch (e) {
      console.error(e);
    }
  };

  return (
    // <main className={styles.main}>
    <main className={styles.main}>
<div className="text-center">
          <p className="text-base font-semibold text-indigo-600">DR.MVTA</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Upload Your Data</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Deliver value and revenue from your data</p>
          
        </div>

      {/* 页面第一部分 开始 */}
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div> */}
      {/* 页面第一部分 结束 */}
      {/* 页面第二部分 开始 */}

      <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover file
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  {/* <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p> */}
                </div>
              </div>
            </div>
        
       
       


      <form onSubmit={submit}>
        <input
          type="file"
          name="file"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         
          onChange={(e) => setFile(e.target.files?.[0])}
          ref={ref}
        />
        <input
          type="submit"
          value="Upload"
          //   演示重点改className
          className="mt-2 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo"
        />
      </form>
      {/* 页面第二部分  结束*/}
    </main>
  );
}