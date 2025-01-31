import React from 'react';
import { DateRangePicker, Button, Divider, Stack } from 'rsuite';
import DefaultPage from '@/components/Page';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import subDays from 'date-fns/subDays';
import isAfter from 'date-fns/isAfter';
import addMonths from 'date-fns/addMonths';
import { BsCalendar2MonthFill } from 'react-icons/bs';
import {
  FaCalendar,
  FaCalendarWeek,
  FaCalendarDay,
  FaCalendarCheck,
  FaClock
} from 'react-icons/fa';

export default function Page() {
  return (
    <DefaultPage
      dependencies={{
        Stack,
        DateRangePicker,
        Button,
        Divider,
        addDays,
        subDays,
        isAfter,
        startOfWeek,
        endOfWeek,
        startOfMonth,
        endOfMonth,
        addMonths,
        FaCalendar,
        FaCalendarWeek,
        FaCalendarDay,
        FaCalendarCheck,
        FaClock,
        BsCalendar2MonthFill
      }}
      sandboxDependencies={{ 'date-fns': '^2.13.0' }}
    />
  );
}
