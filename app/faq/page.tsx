'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { ENHANCEMENT_OPTIONS } from '@/lib/constants/enhancements';

export default function FAQPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="space-y-8">
          <section id="enhancements" className="scroll-mt-16">
            <h2 className="text-2xl font-semibold mb-4">Photo Enhancements</h2>
            <p className="text-muted-foreground mb-6">
              Our AI-powered enhancements are designed specifically for real
              estate photography. Each enhancement type is optimized to make
              your property photos look their best.
            </p>

            <div className="space-y-6">
              {ENHANCEMENT_OPTIONS.map((option) => (
                <Card key={option.id} className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <option.icon className="h-5 w-5" />
                    <h3 className="text-xl font-semibold">{option.label}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">{option.details}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="font-medium">Before</p>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={option.example.before}
                          alt="Before enhancement"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">After</p>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={option.example.after}
                          alt="After enhancement"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">General Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="processing-time">
                <AccordionTrigger>
                  How long does processing take?
                </AccordionTrigger>
                <AccordionContent>
                  Most photos are enhanced within 45-60 seconds. Processing time
                  may vary based on the selected enhancements and current system
                  load. You can check the status of your photos in real-time on
                  the project page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="file-types">
                <AccordionTrigger>
                  What file types are supported?
                </AccordionTrigger>
                <AccordionContent>
                  We support JPEG, PNG, and HEIC files. For best results, we
                  recommend using high-resolution JPEG files. Maximum file size
                  is 10MB per photo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="best-practices">
                <AccordionTrigger>
                  What are the best practices for photo uploads?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use high-resolution photos (minimum 2000px wide)</li>
                    <li>Ensure proper exposure during capture</li>
                    <li>Keep the camera level for interior shots</li>
                    <li>Include all important areas of each room</li>
                    <li>Avoid extreme wide-angle distortion</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="credits">
                <AccordionTrigger>
                  How do processing credits work?
                </AccordionTrigger>
                <AccordionContent>
                  Each photo enhancement uses one processing credit. Credits are
                  automatically deducted when you enhance a photo. You can view
                  your remaining credits on the dashboard. Additional credits
                  can be purchased from your account settings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}
