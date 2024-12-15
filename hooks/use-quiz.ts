"use client";

import { useState } from 'react';
import { QuizFilters } from '@/lib/quiz/types';

export function useQuiz() {
  const [filters, setFilters] = useState<QuizFilters>({});

  const updateFilters = (newFilters: Partial<QuizFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return {
    filters,
    updateFilters,
  };
}