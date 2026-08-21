"use client";

import SplitType, { TypesValue } from "split-type";

export interface SplitTextOptions {
  types?: TypesValue;
  tagName?: string;
  lineClass?: string;
  wordClass?: string;
  charClass?: string;
}

/**
 * Reusable typography splitting utility powered by SplitType
 * Ensures safe revert capability to avoid DOM memory leaks or duplicate wraps
 */
export class SafeSplitText {
  private instance: SplitType | null = null;
  private target: HTMLElement | string;

  constructor(target: HTMLElement | string, options?: SplitTextOptions) {
    this.target = target;
    const element =
      typeof target === "string" ? document.querySelector(target) : target;

    if (element && element instanceof HTMLElement) {
      this.instance = new SplitType(element, {
        types: options?.types || "lines,words",
        tagName: options?.tagName || "span",
        lineClass: options?.lineClass || "split-line",
        wordClass: options?.wordClass || "split-word",
        charClass: options?.charClass || "split-char",
      });
    }
  }

  public get lines() {
    return this.instance?.lines || [];
  }

  public get words() {
    return this.instance?.words || [];
  }

  public get chars() {
    return this.instance?.chars || [];
  }

  public revert() {
    if (this.instance) {
      this.instance.revert();
      this.instance = null;
    }
  }
}
