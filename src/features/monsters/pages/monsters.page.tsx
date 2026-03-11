import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { None, Option, Some } from 'ts-results'
import { BookLink } from '../../../components/BookLink'
import { BookList } from '../../../components/BookList'
import { BookPageTitle } from '../../../components/BookPageTitle'
import { LinkWithIcon } from '../../../components/LinkWithIcon'
import { Typography } from '../../../components/Typography'
import { PageHeader } from '../../../components/page-header'
import { Parchment } from '../../../components/parchment'
import { notNullish } from '../../../functions/utils.functions'
import { useAppSelector } from '../../../store/store.hooks'
import {
  selectCurrentLanguage,
  selectTranslateFunction,
} from '../../../store/translations/translation.slice'
import { BackToAllMonsters } from '../components/BackToAllMonsters'
import { MonsterAttackSection } from '../components/MonsterAttackSection'
import { MonsterDisplay } from '../components/MonsterDisplay'
import { RandomMonsterDisplay } from '../components/RandomMonsterDisplay'
import { RetroDragonIllustration } from '../components/RetroDragonIllustration'
import { communityMonsters } from '../data/community-monster.data'
import { bitterReachMonsters } from '../data/bitter-reach-monster.data' // NUEVO IMPORT
import { bookMonsters } from '../data/monster.data'
import { createMonstersViewModel, monsterComparer } from '../monster.functions'
import { createRandomMonsterViewModel } from '../random-monster.functions'
import { slidingNWise } from '../../../functions/array.functions'

const validSections = ['random', 'book', 'community', 'bitter-reach'] as const
type MonsterRouteSection = (typeof validSections)[number]

const isMonsterRouteSection = (
  section: unknown,
): section is MonsterRouteSection =>
  validSections.includes(section as MonsterRouteSection)

const isValidMonster = (id: string | undefined): id is string =>
  notNullish(id) && bookMonsters.some((m) => m.id === id)

type NavProps = {
  to: string
  text: string
  part: string
}
type BookNavigation = {
  previous: Option<NavProps>
  current: Option<string>
  next: Option<NavProps>
  part: string
}

type NavigationLibrary = { [key: string]: Omit<BookNavigation, 'current'> }

export const MonstersPage = () => {
  const { section, monster } = useParams()

  const t = useAppSelector(selectTranslateFunction(['monsters', 'common']))
  const currentLanguage = useAppSelector(selectCurrentLanguage)
  const monsters = bookMonsters
    .map(createMonstersViewModel)
    .sort(monsterComparer(t))

  const monsterSection = isMonsterRouteSection(section) ? section : undefined

  const isRandomMonster = monsterSection === 'random'
  const [randomMonster, setRandomMonster] = useState(() =>
    createRandomMonsterViewModel(),
  )
  useEffect(() => {
    if (isRandomMonster) {
      setRandomMonster(createRandomMonsterViewModel())
    }
  }, [isRandomMonster])

  const isBookMonster = monsterSection === 'book'
  const isValidMonsterId = isBookMonster && isValidMonster(monster)
  const paramMonster =
    isValidMonsterId && monsters.find((m) => m.id === monster)

  const isCommunityMonster = monsterSection === 'community'
  const como =
    (isCommunityMonster &&
      !!monster &&
      communityMonsters.find((m) => m.id === monster)) ||
    undefined
  const comovm = como ? createMonstersViewModel(como) : undefined

  // NUEVA SECCIÓN CUENCA GLACIAL
  const isBitterReachMonster = monsterSection === 'bitter-reach'
  const brm =
    (isBitterReachMonster &&
      !!monster &&
      bitterReachMonsters.find((m) => m.id === monster)) ||
    undefined
  const brmvm = brm ? createMonstersViewModel(brm) : undefined


  // * Navigation

  const tableOfContentsNav = {
    to: '/monsters',
    part: t('monsters:book_of_monsters'),
    text: t('monsters:book_of_monsters'),
  }

  const randomMonsterNav = {
    to: '/monsters/random',
    part: t('monsters:random_monster.title'),
    text: t('monsters:random_monster.title'),
  }

  const monstersNav = monsters.map((m) => ({
    to: `/monsters/book/${m.id}`,
    part: t('monsters:bookmonsters.title'),
    text: t(m.name),
  }))

  const communityMonstersViewModels = communityMonsters
    .map(createMonstersViewModel)
    .sort(monsterComparer(t))

  const communityMonstersNav = communityMonstersViewModels.map((m) => ({
    to: `/monsters/community/${m.id}`,
    part: t('monsters:community_monster.title'),
    text: t(m.name),
  }))

  const bitterReachMonstersViewModels = bitterReachMonsters
    .map(createMonstersViewModel)
    .sort(monsterComparer(t))

  const bitterReachMonstersNav = bitterReachMonstersViewModels.map((m) => ({
    to: `/monsters/bitter-reach/${m.id}`,
    part: t('common:bitter_reach_monster.title'),
    text: t(m.name),
  }))

  const navigationLibrary: NavigationLibrary = slidingNWise(3, [
    undefined,
    tableOfContentsNav,
    randomMonsterNav,
    ...monstersNav,
    ...communityMonstersNav,
    ...bitterReachMonstersNav, // AÑADIDA A LA NAVEGACIÓN
    undefined,
  ])
    .map(
      ([previous, current, next]): BookNavigation => ({
        previous: previous ? Some(previous) : None,
        current: current ? Some(current.to) : None,
        next: next ? Some(next) : None,
        part: current ? current.part : '',
      }),
    )
    .reduce((lib, cur) => {
      if (cur.current.none) {
        return lib
      }

      lib[cur.current.safeUnwrap()] = cur

      return lib
    }, {} as NavigationLibrary)

  const { pathname } = useLocation()
  const previousMonster = navigationLibrary[pathname]?.previous ?? None
  const nextMonster = navigationLibrary[pathname]?.next ?? None
  const bookPart = navigationLibrary[pathname]?.part ?? ''

  useEffect(() => {
    monsters.sort(monsterComparer(t))
  }, [currentLanguage, monsters, t])

  const shouldShowDragon = () => {
    if (monsterSection === undefined) return true

    if (isBookMonster && paramMonster) {
      if (paramMonster.attacks && paramMonster.attacks.length > 0) return false
      return true
    }
    
    if (isCommunityMonster && comovm) {
      if (comovm.attacks && comovm.attacks.length > 0) return false
      return true
    }

    if (isBitterReachMonster && brmvm) {
      if (brmvm.attacks && brmvm.attacks.length > 0) return false
      return true
    }

    return false
  }

  return (
    <div className="flex w-full flex-col gap-y-8 pb-8">
      <PageHeader>{t('monsters:title')}</PageHeader>
      <div className="relative flex flex-col rounded bg-amber-950 p-2 shadow-lg md:flex-row">
        <div
          className="absolute inset-y-0 left-1/2 z-10 hidden h-full w-4 -translate-x-1/2 bg-gradient-to-r from-transparent from-25%
          via-black to-transparent to-75% md:block"
        ></div>

        <div className="flex-[0_0_50%] items-stretch ">
          <Parchment full>
            <div className="flex h-full flex-col gap-4">
              <div className="mb-4 flex justify-between">
                {monsterSection !== undefined ? (
                  <div>
                    <BackToAllMonsters />
                  </div>
                ) : null}

                {monsterSection !== undefined && nextMonster.some ? (
                  <div className="md:hidden">
                    <LinkWithIcon to={nextMonster.val.to} icon="nextPage" right>
                      {nextMonster.val.text}
                    </LinkWithIcon>
                  </div>
                ) : null}
              </div>

              <div
                className={`${monsterSection === undefined ? '' : 'hidden'}`}
              >
                <MonsterTableOfContents />
              </div>

              {isBookMonster && paramMonster ? (
                <MonsterDisplay m={paramMonster} bookPart={bookPart} />
              ) : null}

              {isRandomMonster ? (
                <RandomMonsterDisplay rm={randomMonster} bookPart={bookPart} />
              ) : null}

              {isCommunityMonster && comovm ? (
                <MonsterDisplay m={comovm} bookPart={bookPart} />
              ) : null}

              {isBitterReachMonster && brmvm ? (
                <MonsterDisplay m={brmvm} bookPart={bookPart} />
              ) : null}

              {previousMonster.some ? (
                <div className="mt-auto hidden md:block">
                  <LinkWithIcon to={previousMonster.val.to} icon="lastPage">
                    {previousMonster.val.text}
                  </LinkWithIcon>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 z-50 h-4 w-full translate-y-2 bg-gradient-to-b from-transparent from-25% via-black to-transparent to-75% md:hidden"></div>
          </Parchment>
        </div>
        
        <div className="flex-[0_0_50%] items-stretch">
          <Parchment full>
            <div className="flex h-full flex-col gap-4">
              <section>
                {shouldShowDragon() ? (
                  <div className="md:h-full">
                    <div className="mx-auto mt-16 min-h-[6rem] w-2/3 opacity-50">
                      <RetroDragonIllustration />
                    </div>
                  </div>
                ) : null}

                {isRandomMonster ? (
                  <MonsterAttackSection como={randomMonster} />
                ) : null}

                {isBookMonster && paramMonster && paramMonster.attacks && paramMonster.attacks.length > 0 ? (
                  <MonsterAttackSection como={paramMonster} />
                ) : null}

                {isCommunityMonster && comovm && comovm.attacks && comovm.attacks.length > 0 ? (
                  <MonsterAttackSection como={comovm} />
                ) : null}

                {isBitterReachMonster && brmvm && brmvm.attacks && brmvm.attacks.length > 0 ? (
                  <MonsterAttackSection como={brmvm} />
                ) : null}

              </section>

              {nextMonster.some ? (
                <div className="mt-auto hidden md:block">
                  <LinkWithIcon to={nextMonster.val.to} icon="nextPage" right>
                    {nextMonster.val.text}
                  </LinkWithIcon>
                </div>
              ) : null}
            </div>
          </Parchment>
        </div>
      </div>
    </div>
  )
}

export default MonstersPage

const MonsterTableOfContents = () => {
  const t = useAppSelector(selectTranslateFunction(['monsters', 'common']))
  const monsters = bookMonsters
    .map(createMonstersViewModel)
    .sort(monsterComparer(t))

  const communityMonstersViewModels = communityMonsters
    .map(createMonstersViewModel)
    .sort(monsterComparer(t))

  const bitterReachMonstersViewModels = bitterReachMonsters
    .map(createMonstersViewModel)
    .sort(monsterComparer(t))

  return (
    <div className="flex flex-col">
      <BookPageTitle>{t('monsters:book_of_monsters')}</BookPageTitle>

      <div className="flex flex-col gap-8">
        <section>
          <Typography variant="h3" parchment>
            {t(`monsters:random_monster.title`)}
          </Typography>
          <div className="mb-4">{t('monsters:bookmonsters.description')}</div>
          <BookList>
            <li className="">
              <BookLink to={'/monsters/random'}>
                {t('monsters:random_monster.generate')}
              </BookLink>
            </li>
          </BookList>
        </section>
        
        <section>
          <Typography variant="h3" parchment>
            {t(`monsters:bookmonsters.title`)}
          </Typography>
          <div className="mb-4">{t('monsters:bookmonsters.description')}</div>
          <BookList>
            {monsters.map((m) => (
              <li key={m.name} className="">
                <BookLink
                  to={`/monsters/book/${m.id}`}
                  pageReference={m.pageReference?.toString()}
                >
                  {t(m.name)}
                </BookLink>
              </li>
            ))}
          </BookList>
        </section>

        <section>
          <Typography variant="h3" parchment>
            {t(`common:community_monster.title`)}
          </Typography>
          <div className="mb-4">
            {t('common:community_monster.description')}
          </div>
          <BookList>
            {communityMonstersViewModels.map((m) => (
              <li key={m.name} className="">
                <BookLink to={`/monsters/community/${m.id}`}>
                  {t(m.name)}
                </BookLink>
              </li>
            ))}
          </BookList>
        </section>

        <section>
          <Typography variant="h3" parchment>
            {t(`common:bitter_reach_monster.title`)}
          </Typography>
          <div className="mb-4">
            {t('common:bitter_reach_monster.description')}
          </div>
          <BookList>
            {bitterReachMonstersViewModels.map((m) => (
              <li key={m.name} className="">
                <BookLink to={`/monsters/bitter-reach/${m.id}`}>
                  {t(m.name)}
                </BookLink>
              </li>
            ))}
          </BookList>
        </section>

      </div>
    </div>
  )
}
