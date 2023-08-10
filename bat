src/functions/math.functions.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/NameList.test.tsx:import { render, within } from '@testing-library/react'
src/pages/npc/NameList.test.tsx:import { describe, it, expect } from 'vitest'
src/pages/places/MapPage.tsx:                Latest exploration notes
src/pages/npc/typical-kin.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/quirk.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/characteristics.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/shield.test.ts:import { describe, it, expect } from 'vitest'
src/functions/village-name.function.test.ts:  const testChooseFunc = <T>(arr: readonly T[]): T => arr[0]
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/pages/npc/occupation.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/name.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/name.test.ts:  const testChooseFunc = <T>(arr: readonly T[]): T => arr[0]
src/pages/npc/name.test.ts:      getRandomAilanderName('Female', 'en', nl, testChooseFunc)
src/pages/npc/name.test.ts:      getRandomAlderlanderName('Female', 'en', nl, testChooseFunc)
src/pages/npc/name.test.ts:      getRandomAsleneName('Female', 'en', nl, testChooseFunc)
src/pages/npc/npc.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/armor.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/NameList.tsx:        <ul data-testid="namelist">
src/pages/places/map.model.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/weapon.test.ts:import { describe, it, expect } from 'vitest'
src/pages/places/map.model.ts:  const isAKey = aKeyRegex.test(s)
src/pages/places/map.model.ts:  const isBKey = bKeyRegex.test(s)
src/functions/encounter.functions.test.ts:import { describe, it, expect } from 'vitest'
src/functions/attributes.functions.test.ts:import { describe, it, expect } from 'vitest'
src/functions/utils.functions.test.ts:import { describe, it, expect } from 'vitest'
src/functions/dice.functions.test.ts:import { describe, it, expect } from 'vitest'
src/functions/dice.functions.test.ts:      [['test'], 'string'],
src/functions/dice.functions.test.ts:      // [['test'], 'string'],
src/vitals.ts:    href: location.href, // https://{my-example-app-name-here}/blog/my-test
src/vitals.ts:        'If you would like to help improve this project, please consider disabling ad blockers and/or upgrading your browser to the latest version.',
src/functions/skills.functions.test.ts:import { describe, it, expect } from 'vitest'
src/models/forbidden-lands-date.model.test.ts:import { describe, expect, it } from 'vitest'
src/models/forbidden-lands-date.model.ts:  if (!integerRegex.test(val)) {
src/test/setup.ts:import { expect, afterEach } from 'vitest'
src/test/setup.ts:import { cleanup } from '@testing-library/react'
src/test/setup.ts:import matchers from '@testing-library/jest-dom/matchers'
src/test/setup.ts:// extends Vitest's expect method with methods from react-testing-library
src/test/setup.ts:// runs a cleanup after each test case (e.g. clearing jsdom)
src/test/mocks.ts:import { vi } from 'vitest'
sonar-project.properties:sonar.tests=src/
sonar-project.properties:sonar.test.inclusions=src/**/*.test.ts,src/components/name-list.tsx
sonar-project.properties:sonar.test.exclusions=src/**/*.test.tsx
sonar-project.properties:sonar.testExecutionReportPaths=./reports/sonar-report.xml
vite.config.js:  test: {
vite.config.js:    setupFiles: ['<rootDir>/test/setup.ts'],
vitest.config.ts:import { defineConfig } from 'vitest/config'
vitest.config.ts:  test: {
vitest.config.ts:    setupFiles: ['/src/test/setup.ts'],
package.json:    "test": "vitest",
package.json:    "coverage": "vitest --coverage --reporter=vitest-sonar-reporter --outputFile=reports/sonar-report.xml",
package.json:    "@testing-library/jest-dom": "^5.16.5",
package.json:    "@testing-library/react": "^14.0.0",
package.json:    "@vitest/coverage-c8": "^0.33.0",
package.json:    "vitest": "^0.33.0",
package.json:    "vitest-sonar-reporter": "^0.4.1"
package-lock.json:        "@testing-library/jest-dom": "^5.16.5",
package-lock.json:        "@testing-library/react": "^14.0.0",
package-lock.json:        "@vitest/coverage-c8": "^0.33.0",
package-lock.json:        "vitest": "^0.33.0",
package-lock.json:        "vitest-sonar-reporter": "^0.4.1"
package-lock.json:    "node_modules/@testing-library/dom": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@testing-library/dom/-/dom-9.2.0.tgz",
package-lock.json:    "node_modules/@testing-library/jest-dom": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@testing-library/jest-dom/-/jest-dom-5.16.5.tgz",
package-lock.json:        "@types/testing-library__jest-dom": "^5.9.1",
package-lock.json:    "node_modules/@testing-library/jest-dom/node_modules/chalk": {
package-lock.json:    "node_modules/@testing-library/react": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@testing-library/react/-/react-14.0.0.tgz",
package-lock.json:        "@testing-library/dom": "^9.0.0",
package-lock.json:    "node_modules/@types/testing-library__jest-dom": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@types/testing-library__jest-dom/-/testing-library__jest-dom-5.14.5.tgz",
package-lock.json:    "node_modules/@vitest/coverage-c8": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/coverage-c8/-/coverage-c8-0.33.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:        "vitest": ">=0.30.0 <1"
package-lock.json:    "node_modules/@vitest/expect": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-0.33.0.tgz",
package-lock.json:        "@vitest/spy": "0.33.0",
package-lock.json:        "@vitest/utils": "0.33.0",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/runner": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-0.33.0.tgz",
package-lock.json:        "@vitest/utils": "0.33.0",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/runner/node_modules/p-limit": {
package-lock.json:    "node_modules/@vitest/runner/node_modules/yocto-queue": {
package-lock.json:    "node_modules/@vitest/snapshot": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-0.33.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/snapshot/node_modules/ansi-styles": {
package-lock.json:    "node_modules/@vitest/snapshot/node_modules/pretty-format": {
package-lock.json:    "node_modules/@vitest/snapshot/node_modules/react-is": {
package-lock.json:    "node_modules/@vitest/spy": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-0.33.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/utils": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-0.33.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/utils/node_modules/ansi-styles": {
package-lock.json:    "node_modules/@vitest/utils/node_modules/pretty-format": {
package-lock.json:    "node_modules/@vitest/utils/node_modules/react-is": {
package-lock.json:        "test-exclude": "^6.0.0",
package-lock.json:        "safe-regex-test": "^1.0.0",
package-lock.json:        "fastest-levenshtein",
package-lock.json:        "fastest-levenshtein": "^1.0.16",
package-lock.json:    "node_modules/npm/node_modules/fastest-levenshtein": {
package-lock.json:    "node_modules/safe-regex-test": {
package-lock.json:      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.0.0.tgz",
package-lock.json:    "node_modules/test-exclude": {
package-lock.json:      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/vitest": {
package-lock.json:      "resolved": "https://registry.npmjs.org/vitest/-/vitest-0.33.0.tgz",
package-lock.json:        "@vitest/expect": "0.33.0",
package-lock.json:        "@vitest/runner": "0.33.0",
package-lock.json:        "@vitest/snapshot": "0.33.0",
package-lock.json:        "@vitest/spy": "0.33.0",
package-lock.json:        "@vitest/utils": "0.33.0",
package-lock.json:        "vitest": "vitest.mjs"
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:        "@vitest/browser": "*",
package-lock.json:        "@vitest/ui": "*",
package-lock.json:        "@vitest/browser": {
package-lock.json:        "@vitest/ui": {
package-lock.json:    "node_modules/vitest-sonar-reporter": {
package-lock.json:      "resolved": "https://registry.npmjs.org/vitest-sonar-reporter/-/vitest-sonar-reporter-0.4.1.tgz",
package-lock.json:        "vitest": ">=0.18.0"
src/pages/npc/weapon.test.ts:import { describe, it, expect } from 'vitest'
src/pages/places/map.model.ts:  const isAKey = aKeyRegex.test(s)
src/pages/places/map.model.ts:  const isBKey = bKeyRegex.test(s)
src/pages/places/MapPage.tsx:                Latest exploration notes
src/functions/math.functions.test.ts:import { describe, it, expect } from 'vitest'
src/functions/village-name.function.test.ts:  const testChooseFunc = <T>(arr: readonly T[]): T => arr[0]
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/village-name.function.test.ts:      const result = getFormattedVillageName(lang, testChooseFunc)
src/functions/encounter.functions.test.ts:import { describe, it, expect } from 'vitest'
src/functions/dice.functions.test.ts:import { describe, it, expect } from 'vitest'
src/functions/dice.functions.test.ts:      [['test'], 'string'],
src/functions/dice.functions.test.ts:      // [['test'], 'string'],
src/pages/npc/characteristics.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/name.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/name.test.ts:  const testChooseFunc = <T>(arr: readonly T[]): T => arr[0]
src/pages/npc/name.test.ts:      getRandomAilanderName('Female', 'en', nl, testChooseFunc)
src/pages/npc/name.test.ts:      getRandomAlderlanderName('Female', 'en', nl, testChooseFunc)
src/pages/npc/name.test.ts:      getRandomAsleneName('Female', 'en', nl, testChooseFunc)
src/pages/npc/typical-kin.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/quirk.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/NameList.test.tsx:import { render, within } from '@testing-library/react'
src/pages/npc/NameList.test.tsx:import { describe, it, expect } from 'vitest'
src/pages/npc/shield.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/occupation.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/NameList.tsx:        <ul data-testid="namelist">
src/functions/utils.functions.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/npc.test.ts:import { describe, it, expect } from 'vitest'
src/pages/places/map.model.test.ts:import { describe, it, expect } from 'vitest'
src/functions/skills.functions.test.ts:import { describe, it, expect } from 'vitest'
src/pages/npc/armor.test.ts:import { describe, it, expect } from 'vitest'
src/functions/attributes.functions.test.ts:import { describe, it, expect } from 'vitest'
src/models/forbidden-lands-date.model.test.ts:import { describe, expect, it } from 'vitest'
src/models/forbidden-lands-date.model.ts:  if (!integerRegex.test(val)) {
src/vitals.ts:    href: location.href, // https://{my-example-app-name-here}/blog/my-test
src/vitals.ts:        'If you would like to help improve this project, please consider disabling ad blockers and/or upgrading your browser to the latest version.',
vitest.config.ts:import { defineConfig } from 'vitest/config'
vitest.config.ts:  test: {
vitest.config.ts:    setupFiles: ['/src/test/setup.ts'],
src/test/setup.ts:import { expect, afterEach } from 'vitest'
src/test/setup.ts:import { cleanup } from '@testing-library/react'
src/test/setup.ts:import matchers from '@testing-library/jest-dom/matchers'
src/test/setup.ts:// extends Vitest's expect method with methods from react-testing-library
src/test/setup.ts:// runs a cleanup after each test case (e.g. clearing jsdom)
package.json:    "test": "vitest",
package.json:    "coverage": "vitest --coverage --reporter=vitest-sonar-reporter --outputFile=reports/sonar-report.xml",
package.json:    "@testing-library/jest-dom": "^5.16.5",
package.json:    "@testing-library/react": "^14.0.0",
package.json:    "@vitest/coverage-c8": "^0.33.0",
package.json:    "vitest": "^0.33.0",
package.json:    "vitest-sonar-reporter": "^0.4.1"
sonar-project.properties:sonar.tests=src/
sonar-project.properties:sonar.test.inclusions=src/**/*.test.ts,src/components/name-list.tsx
sonar-project.properties:sonar.test.exclusions=src/**/*.test.tsx
sonar-project.properties:sonar.testExecutionReportPaths=./reports/sonar-report.xml
vite.config.js:  test: {
vite.config.js:    setupFiles: ['<rootDir>/test/setup.ts'],
src/test/mocks.ts:import { vi } from 'vitest'
package-lock.json:        "@testing-library/jest-dom": "^5.16.5",
package-lock.json:        "@testing-library/react": "^14.0.0",
package-lock.json:        "@vitest/coverage-c8": "^0.33.0",
package-lock.json:        "vitest": "^0.33.0",
package-lock.json:        "vitest-sonar-reporter": "^0.4.1"
package-lock.json:    "node_modules/@testing-library/dom": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@testing-library/dom/-/dom-9.2.0.tgz",
package-lock.json:    "node_modules/@testing-library/jest-dom": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@testing-library/jest-dom/-/jest-dom-5.16.5.tgz",
package-lock.json:        "@types/testing-library__jest-dom": "^5.9.1",
package-lock.json:    "node_modules/@testing-library/jest-dom/node_modules/chalk": {
package-lock.json:    "node_modules/@testing-library/react": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@testing-library/react/-/react-14.0.0.tgz",
package-lock.json:        "@testing-library/dom": "^9.0.0",
package-lock.json:    "node_modules/@types/testing-library__jest-dom": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@types/testing-library__jest-dom/-/testing-library__jest-dom-5.14.5.tgz",
package-lock.json:    "node_modules/@vitest/coverage-c8": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/coverage-c8/-/coverage-c8-0.33.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:        "vitest": ">=0.30.0 <1"
package-lock.json:    "node_modules/@vitest/expect": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-0.33.0.tgz",
package-lock.json:        "@vitest/spy": "0.33.0",
package-lock.json:        "@vitest/utils": "0.33.0",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/runner": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-0.33.0.tgz",
package-lock.json:        "@vitest/utils": "0.33.0",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/runner/node_modules/p-limit": {
package-lock.json:    "node_modules/@vitest/runner/node_modules/yocto-queue": {
package-lock.json:    "node_modules/@vitest/snapshot": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-0.33.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/snapshot/node_modules/ansi-styles": {
package-lock.json:    "node_modules/@vitest/snapshot/node_modules/pretty-format": {
package-lock.json:    "node_modules/@vitest/snapshot/node_modules/react-is": {
package-lock.json:    "node_modules/@vitest/spy": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-0.33.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/utils": {
package-lock.json:      "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-0.33.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/@vitest/utils/node_modules/ansi-styles": {
package-lock.json:    "node_modules/@vitest/utils/node_modules/pretty-format": {
package-lock.json:    "node_modules/@vitest/utils/node_modules/react-is": {
package-lock.json:        "test-exclude": "^6.0.0",
package-lock.json:        "safe-regex-test": "^1.0.0",
package-lock.json:        "fastest-levenshtein",
package-lock.json:        "fastest-levenshtein": "^1.0.16",
package-lock.json:    "node_modules/npm/node_modules/fastest-levenshtein": {
package-lock.json:    "node_modules/safe-regex-test": {
package-lock.json:      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.0.0.tgz",
package-lock.json:    "node_modules/test-exclude": {
package-lock.json:      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:    "node_modules/vitest": {
package-lock.json:      "resolved": "https://registry.npmjs.org/vitest/-/vitest-0.33.0.tgz",
package-lock.json:        "@vitest/expect": "0.33.0",
package-lock.json:        "@vitest/runner": "0.33.0",
package-lock.json:        "@vitest/snapshot": "0.33.0",
package-lock.json:        "@vitest/spy": "0.33.0",
package-lock.json:        "@vitest/utils": "0.33.0",
package-lock.json:        "vitest": "vitest.mjs"
package-lock.json:        "url": "https://opencollective.com/vitest"
package-lock.json:        "@vitest/browser": "*",
package-lock.json:        "@vitest/ui": "*",
package-lock.json:        "@vitest/browser": {
package-lock.json:        "@vitest/ui": {
package-lock.json:    "node_modules/vitest-sonar-reporter": {
package-lock.json:      "resolved": "https://registry.npmjs.org/vitest-sonar-reporter/-/vitest-sonar-reporter-0.4.1.tgz",
package-lock.json:        "vitest": ">=0.18.0"
