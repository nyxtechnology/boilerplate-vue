const utilsEnv = require('./environments')

describe('@utils/environments/{isProd}', () => {
  it('Should return true if for production', () => {
    process.env.NODE_ENV = 'production'
    expect(utilsEnv.isProd()).toEqual(true)
  })
  it('Should return false if not production', () => {
    process.env.NODE_ENV = 'development'
    expect(utilsEnv.isProd()).toEqual(false)
  })
})

describe('@utils/environments/{isDevelopment}', () => {
  it('Should return true if for development', () => {
    process.env.NODE_ENV = 'development'
    expect(utilsEnv.isDevelopment()).toEqual(true)
  })
  it('Should return false if not development', () => {
    process.env.NODE_ENV = 'staging'
    expect(utilsEnv.isDevelopment()).toEqual(false)
  })
})
