'use client';
import CounterComponents1 from '@/app/CounterComponents1';
import CounterComponents2 from '@/app/CounterComponents2';
import CounterComponents3 from '@/app/CounterComponents3';
import TextComponent from '@/app/TextComponent';

export default function Home() {
  return (
      <div className="p-10">
          <h1 className="mb-2 text-xl text-red-500">Store 1</h1>
          <div className="flex flex-col items-start gap-2 mb-10">
              <p className="text-cyan-900 mt-10">{'Component -> 1'}</p>
              <CounterComponents1/>
              <p className="text-cyan-900 mt-10">{'Component -> 2'}</p>
              <CounterComponents2/>
              <p className="text-cyan-900 mt-10">{'Component -> 3'}</p>
              <CounterComponents3/>
          </div>

          <h1 className="mb-2 text-xl text-red-500">Store 2</h1>
          <div>
              <p className="text-cyan-900 mt-10">{'Component -> 1'}</p>
              <TextComponent />
          </div>
      </div>
  );
}
