import { Event } from './types';

export const events: Event[] = [
  {
    id: '1',
    date: '今天',
    title: 'Q3 战略会议',
    time: '10:00 AM',
    description: '与执行团队讨论了下一季度的关键交付成果并调整了时间表。',
    category: '工作',
    icon: 'briefcase',
  },
  {
    id: '2',
    date: '今天',
    title: '生鲜采购',
    time: '01:30 PM',
    description: '去超市买了接下来三天的食材。',
    category: '生活',
    icon: 'home',
  },
  {
    id: '3',
    date: '昨天，10月25日',
    title: '客户出差',
    time: '08:00 AM',
    description: '飞往芝加哥参加年度利益相关者审查会议。',
    category: '工作',
    icon: 'plane',
  },
  {
    id: '4',
    date: '昨天，10月25日',
    title: '晨跑',
    time: '07:30 AM',
    description: '在公园跑了5公里，感觉十分放松。',
    icon: 'home',
    category: '生活'
  }
];
