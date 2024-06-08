import { Badge } from "@/components/ui/badge";

export default function GrainySection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-[100vh]">
        <div className="bg-[conic-gradient(var(--tw-gradient-stops))] from-black via-black to-black relative h-full overflow-hidden">
          <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-25 brightness-100 contrast-150 flex flex-col items-center justify-center gap-5">
            <h1 className="text-7xl font-black text-black">Life of a Maverick</h1>
            <Badge className="text-md">Comming Soon</Badge>
          </div>
        </div>
      </div> 
    </div>
  );
}
