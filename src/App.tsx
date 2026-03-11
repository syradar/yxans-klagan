import { Suspense, useCallback, useEffect, useState } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import './App.css'
import { Menu, appRoutes, menuRoutes } from './Menu'
import { ParchmentButton } from './components/ParchmentButton'
import Stack from './components/Stack'
import { DayCounter } from './components/day-counter'
import LanguageSwitcher from './components/language-switcher'
import {
  nextDay,
  previousDay,
  selectCurrentDate,
  toggleQuarter,
} from './features/calendar/calendar-slice'
import { YxansKlaganLogo } from './logo'
import { useAppDispatch, useAppSelector } from './store/store.hooks'
import {
  initTranslations,
  selectTranslateFunction,
} from './store/translations/translation.slice'

const AppToolbar = () => {
  const t = useAppSelector(selectTranslateFunction(['calendar']))
  const { currentDate, quarters } = useAppSelector(selectCurrentDate)
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-wrap  gap-4 bg-amber-50 px-4 py-2 shadow md:grid-cols-4">
      <div className="flex min-w-[200px] max-w-[300px] flex-auto items-center gap-2">
        <div>{currentDate.format()}</div>

        <DayCounter
          quarters={quarters}
          onPress={() => dispatch(toggleQuarter(currentDate))}
        />
      </div>
      <div className="flex flex-auto justify-between gap-2 sm:justify-end">
        <ParchmentButton
          small
          buttonType="ghost"
          onPress={() => dispatch(previousDay())}
        >
          {t('calendar:previous_day')}
        </ParchmentButton>
        <ParchmentButton
          small
          buttonType="ghost"
          onPress={() => dispatch(nextDay())}
        >
          {t('calendar:next_day')}
        </ParchmentButton>
      </div>
    </div>
  )
}

const App = () => {
  const routes = useRoutes(appRoutes)

  return (
    <div
      className={`App h-full min-h-screen w-screen max-w-full  bg-amber-50/25`}
    >
      <div className="flex flex-col lg:min-h-screen lg:flex-row">
        <AppMenu></AppMenu>
        <Suspense fallback={<div>Loading...</div>}>
          <main className="block  max-h-screen w-full overflow-auto p-0">
            <AppToolbar />
            <div className="px-2 py-8 lg:px-4">{routes}</div>
          </main>
        </Suspense>
      </div>

      {/* --- INICIO CÓDIGO DE GUARDADO (VERSION CORREGIDA - MOVIDA A LA IZQUIERDA) --- */}
      <div style={{ position: 'fixed', bottom: '60px', left: '20px', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button 
          onClick={() => {
            const data = JSON.stringify(localStorage);
            const blob = new Blob([data], {type: "application/json"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "backup_yxans_klagan.json";
            a.click();
          }} 
          style={{ background: '#22c55e', color: 'white', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', border: '2px solid white', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
          💾 Guardar
        </button>

        <button 
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'application/json';
            // @ts-ignore
            input.onchange = (e) => {
                 // @ts-ignore
                const file = e.target.files[0];
                const reader = new FileReader();
                 // @ts-ignore
                reader.onload = (ev) => {
                    if(window.confirm("⚠️ ¿Seguro? Se borrarán los datos actuales.")) {
                         // @ts-ignore
                        const data = JSON.parse(ev.target.result);
                        localStorage.clear();
                        Object.keys(data).forEach(k => localStorage.setItem(k, data[k]));
                        alert("¡Datos cargados!");
                        window.location.reload();
                    }
                };
                reader.readAsText(file);
            };
            input.click();
          }} 
          style={{ background: '#3b82f6', color: 'white', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', border: '2px solid white', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
          📂 Cargar
        </button>
      </div>
      {/* --- FIN CÓDIGO DE GUARDADO --- */}

    </div>
  )
}

export default App

const AppMenu = () => {
  const dispatch = useAppDispatch()
  const initTranslationSystem = useCallback(
    async () => await dispatch(initTranslations),
    [dispatch],
  )
  useEffect(() => {
    initTranslationSystem()
  }, [initTranslationSystem])

  const t = useAppSelector(selectTranslateFunction(['core']))
  const [isOpen, setIsOpen] = useState(false)
  const isLg = useMediaQuery('(min-width: 1024px)')

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col gap-4 bg-[#bb9883] py-4 lg:min-h-screen lg:min-w-[14rem]">
      <div className="flex justify-between gap-2 bg-[#bb9883] px-2">
        <Link to="/" className="block" onClick={() => !isLg && close()}>
          <YxansKlaganLogo />
        </Link>
        {!isLg ? (
          <ParchmentButton buttonType="ghost" small onPress={handleMenuClick}>
            {t('core:menu.menu')}
          </ParchmentButton>
        ) : null}
      </div>
      {isOpen || isLg ? (
        <div className="flex h-full flex-col justify-between gap-4">
          <Stack.Vertical wrap={false} spacing="small">
            <Menu close={closeMenu} menuRoutes={menuRoutes} />
          </Stack.Vertical>

          <div className="flex flex-col gap-4 ">
            <LanguageSwitcher></LanguageSwitcher>

            <a
              className="mb-4 mt-auto text-center hover:text-red-700 hover:underline"
              href="https://github.com/syradar/yxans-klagan/issues/new/choose"
            >
              {t('core:give_feedback')}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  )
}
