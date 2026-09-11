import React, { useEffect, useRef, useState } from 'react';
import {
  ClipboardCheck,
  FileSpreadsheet,
  Terminal,
  Database,
  Bug,
  Globe,
  Cpu,
  Smartphone,
  ArrowRight,
  
  CheckCircle2
} from 'lucide-react';
import { offeredServices } from '../../data/portfolioData';
import SectionHeading from '../common/SectionHeading';
import Modal from '../common/Modal';

const iconMap = {
  ClipboardCheck,
  FileSpreadsheet,
  Terminal,
  Database,
  Bug,
  Globe,
  Cpu,
  Smartphone,
};

export default function Services() {
  const [activeModalService, setActiveModalService] = useState(null);

  const carouselRef = useRef(null);
  const isHoveredRef = useRef(false);
  const animationRef = useRef(null);

  /*
   * Duplicate the services so the carousel can loop seamlessly.
   *
   * Example:
   * 1 2 3 4 5 6 7 8 | 1 2 3 4 5 6 7 8
   */
  const carouselServices = [...offeredServices, ...offeredServices];

  /*
   * Infinite auto-scroll
   */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const speed = 0.5; // pixels per frame

    const animate = () => {
      if (!isHoveredRef.current) {
        carousel.scrollLeft += speed;

        /*
         * We have duplicated the services.
         * Once we reach the beginning of the second copy,
         * silently jump back to the beginning of the first copy.
         */
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft -= carousel.scrollWidth / 2;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  /*
   * Manual navigation
   */
  const scrollServices = (direction) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;

    if (!carousel || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).gap) || 0;
    const scrollAmount = firstCard.getBoundingClientRect().width + gap;

    /*
     * If we're at the beginning and clicking left,
     * move to the second copy first.
     */
    if (direction === -1 && carousel.scrollLeft <= 0) {
      carousel.scrollLeft = carousel.scrollWidth / 2;
    }

    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="services"
      className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          tag="05. QA Solutions"
          title="Offered Software Testing"
          accent="Services"
          subtitle="Specialized quality assurance and test validation services for modern web applications and APIs."
        />

        {/* Infinite Services Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
        >
          {carouselServices.map((service, index) => {
            const Icon = iconMap[service.icon] || ClipboardCheck;

            return (
              <div
                key={`${service.id}-${index}`}
                className="
                  w-[calc(100%-1.5rem)]
                  sm:w-[calc(50%-0.75rem)]
                  lg:w-[calc(25%-1.125rem)]
                  shrink-0

                  rounded-2xl
                  bg-white
                  dark:bg-slate-900/80

                  border
                  border-slate-200
                  dark:border-slate-800

                  p-6

                  flex
                  flex-col
                  justify-between

                  hover:border-indigo-400
                  dark:hover:border-indigo-500/50

                  hover:bg-slate-50
                  dark:hover:bg-slate-900/90

                  transition-all
                  duration-200

                  group
                  hover:-translate-y-1

                  shadow-sm
                "
              >
                <div>

                  {/* Icon */}
                  <div
                    className="
                      w-12 h-12
                      rounded-xl

                      bg-slate-100
                      dark:bg-slate-950

                      border
                      border-slate-200
                      dark:border-slate-800

                      flex
                      items-center
                      justify-center

                      text-indigo-600
                      dark:text-indigo-400

                      group-hover:text-emerald-500
                      dark:group-hover:text-emerald-400

                      group-hover:border-emerald-500/30

                      transition-colors
                      mb-5
                    "
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-slate-900
                      dark:text-white

                      group-hover:text-indigo-600
                      dark:group-hover:text-indigo-300

                      transition-colors
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      text-xs
                      text-slate-600
                      dark:text-slate-400
                      leading-relaxed
                    "
                  >
                    {service.description}
                  </p>

                  {/* Keywords */}
                  <div
                    className="
                      mt-4
                      pt-4
                      border-t
                      border-slate-200
                      dark:border-slate-800/70

                      flex
                      flex-wrap
                      gap-1.5
                    "
                  >
                    {service.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="
                          text-[10px]
                          font-mono
                          px-2
                          py-0.5
                          rounded

                          bg-slate-100
                          dark:bg-slate-950

                          text-slate-600
                          dark:text-slate-400

                          border
                          border-slate-200
                          dark:border-slate-800
                        "
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div
                  className="
                    mt-6
                    pt-3
                    border-t
                    border-slate-200
                    dark:border-slate-800/60
                  "
                >
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between

                      text-xs
                      font-medium

                      text-slate-700
                      dark:text-slate-300

                      group-hover:text-emerald-600
                      dark:group-hover:text-emerald-400

                      transition-colors
                      py-1
                    "
                  >
                    <span>Inspect Deliverables</span>

                    <ArrowRight
                      className="
                        w-3.5
                        h-3.5
                        group-hover:translate-x-1
                        transition-transform
                      "
                    />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal */}
        {activeModalService && (
          <Modal
            isOpen={!!activeModalService}
            onClose={() => setActiveModalService(null)}
            title={activeModalService.title}
            subtitle="Testing Service Scope & Deliverables"
          >
            <div className="space-y-4">

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">
                  Service Description
                </h4>

                <p className="text-sm text-slate-800 dark:text-slate-200">
                  {activeModalService.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key Deliverables & Artifacts</span>
                </h4>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeModalService.deliverables}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-2">
                  Keywords & Capabilities
                </h4>

                <div className="flex flex-wrap gap-2">
                  {activeModalService.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </Modal>
        )}

      </div>
    </section>
  );
}