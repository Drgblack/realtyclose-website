import type { MDXComponents } from 'mdx/types';
import CTA from './components/CTA';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CTA,
    ...components,
  };
}