// Globally register all components inside the components directory `~/components/global` for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'


// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  // '@/components/',
  '@/components',
  // Include subdirectories
  false,
  // Only include "_base-" prefixed .vue files
  /[\w]+\.vue$/
)
// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = upperFirst(
    camelCase(
      fileName
        // Remove the path from the global folder components
        // .replace(/^global\/*$/, '')
        // Remove the "./_" from the beginning
        // .replace(/^\.\/_/, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
    )
  )
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})

// Load global components
const requireGlobalComponent = require.context(
    // Look for files in the current directory
    // '@/components/',
    '@/components/includes',
    // Include subdirectories
    true,
    // Only include "_base-" prefixed .vue files
    /[\w]+\.vue$/
  )
// For each matching file name...
requireGlobalComponent.keys().forEach((fileName) => {
    // Get the component config
    const componentConfig = requireGlobalComponent(fileName)
    // Get the PascalCase version of the component name
    const componentName = upperFirst(
      camelCase(
        fileName
          // Remove the path from the global folder components
          // .replace(/^global\/*$/, '')
          // Remove the "./_" from the beginning
          // .replace(/^\.\/_/, '')
          // Remove the file extension from the end
          .replace(/\.\w+$/, '')
      )
    )
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
  })