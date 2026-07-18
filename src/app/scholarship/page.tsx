"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Award, ChevronRight, Images, Sparkles } from "lucide-react";

type ResultGroupKey = "A" | "B" | "C" | "D" | "E" | "F";

type ResultGroup = {
  key: ResultGroupKey;
  title: string;
  subtitle: string;
  image: string;
};

const resultGroups: ResultGroup[] = [
  { key: "A", title: "Group A", subtitle: "Result sheet for Group A", image: "/scholar/scholarA.png" },
  { key: "B", title: "Group B", subtitle: "Result sheet for Group B", image: "/scholar/scholarB.png" },
  { key: "C", title: "Group C", subtitle: "Result sheet for Group C", image: "/scholar/scholarC.png" },
  { key: "D", title: "Group D", subtitle: "Result sheet for Group D", image: "/scholar/scholarD.png" },
  { key: "E", title: "Group E", subtitle: "Result sheet for Group E", image: "/scholar/scholarE.png" },
];

export default function ScholarshipPage() {
  const [selectedGroup, setSelectedGroup] = useState<ResultGroupKey>("A");
  const [hasImageError, setHasImageError] = useState(false);
  const [showDecisionPopup, setShowDecisionPopup] = useState(true);

  const activeGroup = resultGroups.find((group) => group.key === selectedGroup) ?? resultGroups[0];

  useEffect(() => {
    setHasImageError(false);
  }, [selectedGroup]);

  return (
    <>
      {showDecisionPopup ? (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[1.75rem] border border-white/10 bg-white p-6 text-center shadow-[0_30px_120px_rgba(1,49,90,0.35)] sm:p-8">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-[#01315A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#01315A]">
              Agree to the Judges&apos; Decision
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              The decisions of the respected judges are full and final.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              No requests will be entertained.
            </p>
            <button
              type="button"
              onClick={() => setShowDecisionPopup(false)}
              className="mx-auto mt-6 inline-flex items-center justify-center rounded-full bg-[#01315A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#024b7f]"
            >
              I accept
            </button>
          </div>
        </div>
      ) : null}

      <section className="bg-gradient-to-b from-white via-[#f5f9fc] to-white py-8 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 xl:px-10">
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(1,49,90,0.12)] lg:rounded-[1.75rem]">
          <div className="bg-gradient-to-r from-[#01315A] via-[#024b7f] to-[#0f6aa8] px-4 py-4 text-white sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-sm">
                <Sparkles className="h-4 w-4" />
                Scholarship Results
              </div>

              <div className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 sm:inline-flex">
                Judges&apos; decisions are final
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-3 sm:p-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:p-6 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-8 xl:p-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
              <div className="mb-3 flex items-center gap-2 text-[#01315A]">
                <Images className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Groups</span>
              </div>

              <div className="grid grid-cols-6 gap-2 lg:grid-cols-2 xl:grid-cols-3">
                {resultGroups.map((group) => {
                  const active = group.key === selectedGroup;

                  return (
                    <button
                      key={group.key}
                      type="button"
                      onClick={() => setSelectedGroup(group.key)}
                      title={group.title}
                      className={`flex h-10 items-center justify-center rounded-xl border text-sm font-semibold transition-all duration-200 ${
                        active
                          ? "border-[#01315A] bg-[#01315A] text-white shadow-md shadow-[#01315A]/20"
                          : "border-slate-200 bg-white text-slate-700 hover:border-[#01315A]/30 hover:bg-[#01315A]/5"
                      }`}
                    >
                      {group.key}
                    </button>
                  );
                })}
              </div>

            </div>

            <div className="flex min-w-0 flex-col gap-3">
              <div className="flex items-center justify-between gap-3 px-1">
                <h2 className="text-lg font-semibold text-[#01315A] sm:text-xl">{activeGroup.title}</h2>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                  Result
                </span>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
                {hasImageError ? (
                  <div className="flex min-h-[62vh] flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[68vh]">
                    <div className="rounded-full bg-[#01315A]/10 p-4 text-[#01315A]">
                      <Images className="h-7 w-7" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#01315A] sm:text-xl">Image coming soon</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                      Upload <span className="font-medium text-slate-900">{activeGroup.image}</span> in the public folder and it will display here.
                    </p>
                  </div>
                ) : (
                  <div className="relative min-h-[62vh] sm:min-h-[68vh] lg:min-h-[74vh] xl:min-h-[78vh]">
                    <Image
                      src={activeGroup.image}
                      alt={`${activeGroup.title} result sheet`}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) calc(100vw - 280px), calc(100vw - 320px)"
                      className="bg-white object-contain p-1 sm:p-3 lg:p-2 xl:p-1"
                      onError={() => setHasImageError(true)}
                      priority={selectedGroup === "A"}
                    />
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-[#01315A]/10 bg-gradient-to-r from-[#01315A]/5 to-white px-4 py-3 text-sm text-slate-700">
                Judges&apos; decisions are final and cannot be challenged.
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}


// export default function ScholarshipPage() {
// 	return (
// 		<main className="flex min-h-screen items-center justify-center px-6 py-16 text-center">
// 			<h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
// 				Coming soon
// 			</h1>
// 		</main>
// 	);
// }



