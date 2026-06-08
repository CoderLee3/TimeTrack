/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import EventListScreen from './screens/EventListScreen';
import EventDetailScreen from './screens/EventDetailScreen';
import AddEventScreen from './screens/AddEventScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import BottomNav from './components/BottomNav';

export type ScreenType = 'list' | 'detail' | 'add' | 'dashboard' | 'login';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('login');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const navigate = (screen: ScreenType, arg?: string) => {
    setCurrentScreen(screen);
    if (screen === 'detail' && arg) {
      setSelectedEventId(arg);
    } else if (screen === 'list' && arg) {
      setSelectedCategory(arg);
    } else {
      if (screen === 'list') {
         setSelectedCategory(null);
      }
    }
  };

  const handleLogin = () => {
    setCurrentScreen('dashboard');
  };

  return (
    <div className="font-sans text-on-surface bg-surface min-h-screen flex flex-col mx-auto max-w-md shadow-2xl overflow-hidden relative border-x border-outline/10">
      <div className="flex-1 overflow-y-auto w-full h-full">
        {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
        {currentScreen === 'list' && <EventListScreen onNavigate={navigate} category={selectedCategory} />}
        {currentScreen === 'detail' && <EventDetailScreen onNavigate={navigate} eventId={selectedEventId} />}
        {currentScreen === 'add' && <AddEventScreen onNavigate={navigate} />}
        {currentScreen === 'dashboard' && <DashboardScreen onNavigate={navigate} />}
      </div>
      {(currentScreen === 'list' || currentScreen === 'add' || currentScreen === 'dashboard') && (
         <BottomNav currentScreen={currentScreen} onNavigate={navigate} />
      )}
    </div>
  );
}
