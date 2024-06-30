# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [6.0.0](https://github.com/soc221b/yup-schema-faker/compare/5.0.2...v6.0.0) (2024-06-30)


### ⚠ BREAKING CHANGES

* `faker` must now be passed to the `install` function
* need to explicitly call install function to install fakers
* drop support for Node.js 10 and 12

### Features

* add passing of Faker instance ([#182](https://github.com/soc221b/yup-schema-faker/issues/182)) ([6cd4d29](https://github.com/soc221b/yup-schema-faker/commit/6cd4d29b551d3817e7e6f1837c966448720354c6))
* add strict option to fake ([4d9e4a9](https://github.com/soc221b/yup-schema-faker/commit/4d9e4a99d1ec7870ce120a2adf40ee7f14a34c8b))
* add typings ([b06a7df](https://github.com/soc221b/yup-schema-faker/commit/b06a7dfe36680722977e751782d903d245e743f9))
* export built-in fakers ([29841c8](https://github.com/soc221b/yup-schema-faker/commit/29841c8ce412b5ad22b09172e0b827d8d01e3b78))
* export version info ([ffae155](https://github.com/soc221b/yup-schema-faker/commit/ffae1555d3a887ee4833cad3b0747a1367bc7d8c))
* expose addFaker method to support custom schema ([715e4a7](https://github.com/soc221b/yup-schema-faker/commit/715e4a7258d2bd597286ade52bd936e4f870938c))
* expose fakeDedicatedTest method for custom schema fake implementation ([71675b5](https://github.com/soc221b/yup-schema-faker/commit/71675b51bf7fa25282b20c9d318ee8d9859a1fcc))
* expose install function, make it tree-shakeable ([16a72f6](https://github.com/soc221b/yup-schema-faker/commit/16a72f6d7351948f0ffc56d61e45b9eec8880e42))
* expose seed ([2eb3568](https://github.com/soc221b/yup-schema-faker/commit/2eb35689c7fe6f2aaf4ab6dec0d4a085b667626e))
* fake simple mixed schema ([e4069a2](https://github.com/soc221b/yup-schema-faker/commit/e4069a29db7abb12d8410cb2a1fce6b86a833ffc))
* fake small numbers too ([2d13c99](https://github.com/soc221b/yup-schema-faker/commit/2d13c99cb0806210f58947350a5c93bce1ca74de))
* implement ([df4ee1d](https://github.com/soc221b/yup-schema-faker/commit/df4ee1dd4d5e2c4b9fbad11b48ccbdf9fc6f8c0f))
* implement array methods ([2065d04](https://github.com/soc221b/yup-schema-faker/commit/2065d0491ebdcd1cdde52c85aebe9baffb24ef0f))
* implement boolean methods ([1bdf4ce](https://github.com/soc221b/yup-schema-faker/commit/1bdf4ced49e8438911cd7c67ab104303c4116c04))
* implement boolean methods ([501e827](https://github.com/soc221b/yup-schema-faker/commit/501e8272917f42be90e734ebbb39d03cfc5a818f))
* implement date methods ([0c7e338](https://github.com/soc221b/yup-schema-faker/commit/0c7e338b18405525dce1a62c361db5fd7a9dcdbb))
* implement date methods ([af385a6](https://github.com/soc221b/yup-schema-faker/commit/af385a635f4bdb95c322f3ec714ba37e675a3487))
* implement lazy ([1e25103](https://github.com/soc221b/yup-schema-faker/commit/1e25103204aaaac0d45c1bafcb4ce12304d1c60f))
* implement mixed methods ([53087af](https://github.com/soc221b/yup-schema-faker/commit/53087afd203b44e653d0b55b5900a79bc7ec4d9f))
* implement mixed.default ([6e1fdad](https://github.com/soc221b/yup-schema-faker/commit/6e1fdad5c94326d578d6d41718bbc38aef8858b1))
* implement mixed.defined ([abba2d0](https://github.com/soc221b/yup-schema-faker/commit/abba2d0233f5226f5cc8e6eedd7136350d7185d9))
* implement mixed.nullable ([a9094bc](https://github.com/soc221b/yup-schema-faker/commit/a9094bc4eff129afcfe95b1402e03dca5f93af5c))
* implement mixed.oneOf ([9307aa4](https://github.com/soc221b/yup-schema-faker/commit/9307aa4d60dd5dd2ef6f58862b8bf9538ffb010f))
* implement mixed.when ([3551544](https://github.com/soc221b/yup-schema-faker/commit/3551544ea9907bd2c6687deab2a72860c6f74eb5))
* implement notOneOf ([4433db5](https://github.com/soc221b/yup-schema-faker/commit/4433db598d117cfeef69e751b5f79e16951f2491))
* implement number methods ([7e5672e](https://github.com/soc221b/yup-schema-faker/commit/7e5672ea1cf9c008f5008858db65fe83c227e0e0))
* implement object methods ([dc0b829](https://github.com/soc221b/yup-schema-faker/commit/dc0b8294e3e0b3c01ffba43672521d3f83b0bdb2))
* implement ref ([90010a2](https://github.com/soc221b/yup-schema-faker/commit/90010a21b518ee899961ea8088bf5851cf2da4b3))
* implement string methods ([3f075d8](https://github.com/soc221b/yup-schema-faker/commit/3f075d8086b27002b24d1e414442174153c1acef))
* implement string methods ([ba023f2](https://github.com/soc221b/yup-schema-faker/commit/ba023f2ae40352c7a855c474579bed8eef1fc1c1))
* support seed for string.matches ([d9f3c50](https://github.com/soc221b/yup-schema-faker/commit/d9f3c50e34c05f3d2d24323deb5ae20c062ef968))
* to simulate cast when not in strict mode ([930b490](https://github.com/soc221b/yup-schema-faker/commit/930b49039c9898b70296c0ac2ef10f1b6d0167d9))
* to simulate skipping coercion when not in strict mode ([4d53e85](https://github.com/soc221b/yup-schema-faker/commit/4d53e8511a933199701a49a36bda68682af9b57f))


### Bug Fixes

* backward compatibility for faker ([136f6ff](https://github.com/soc221b/yup-schema-faker/commit/136f6ff846e6dbfeeae82a3b893e79dbe3902d66))
* circular dependency ([#252](https://github.com/soc221b/yup-schema-faker/issues/252)) ([9ffd0a1](https://github.com/soc221b/yup-schema-faker/commit/9ffd0a117ce7cdec2e730b702b53a81c504b8012))
* date should be Date instance ([04af557](https://github.com/soc221b/yup-schema-faker/commit/04af55743e92c173263c8173725698fd790c9ad0))
* **deps:** update dependency @vueuse/core to v10.11.0 ([#254](https://github.com/soc221b/yup-schema-faker/issues/254)) ([b6131b8](https://github.com/soc221b/yup-schema-faker/commit/b6131b83453eb15d4f0f9149f9d860ad988ba1b3))
* **deps:** update dependency highlight.js to v11 ([c641f3d](https://github.com/soc221b/yup-schema-faker/commit/c641f3d98767a86ddc72bbe86a2fd7bd229b517d))
* empty string for string.required is considered as invalid value ([039c1a1](https://github.com/soc221b/yup-schema-faker/commit/039c1a1c8762a16badf06d45613654fabf1459ff))
* enable noUnknown will also enable stripUnknown when not in strict mode ([1759663](https://github.com/soc221b/yup-schema-faker/commit/175966350fe39e7faeae8685fcf42d7a82ac291d))
* external class identity issue ([537e330](https://github.com/soc221b/yup-schema-faker/commit/537e330e75f5041983925f7af69b18b7e2dbc311))
* failed to install ([65c5952](https://github.com/soc221b/yup-schema-faker/commit/65c5952d096e4af1edd290df789e248ca7d70931))
* fakeFn's parameter schema should be same as given schema ([8b53bf2](https://github.com/soc221b/yup-schema-faker/commit/8b53bf20d68ea17da785284ff06b1a6584c94153))
* generate known fields if strict ([2448f1b](https://github.com/soc221b/yup-schema-faker/commit/2448f1b108f1b86f7a23e3303141564ef3589138))
* hide private objects ([20407b4](https://github.com/soc221b/yup-schema-faker/commit/20407b4bf00544263fbd1363e51a46ff8959d50d))
* inherit strict mode ([fa3e8db](https://github.com/soc221b/yup-schema-faker/commit/fa3e8db02bf41607ad7134065277884c5f2069f9))
* min, max, and length may be used together ([1265f24](https://github.com/soc221b/yup-schema-faker/commit/1265f24c4be0e8a10d4020ce8c4da742cb137bee))
* missing type ([e3bd588](https://github.com/soc221b/yup-schema-faker/commit/e3bd5887fd191269a486d9c53c70302006a87199))
* mixed.when should works with context ([2946420](https://github.com/soc221b/yup-schema-faker/commit/2946420af26b0d3bca8674eb71ebcc61abe460b3))
* **number:** max must larger than or equal to min ([970930b](https://github.com/soc221b/yup-schema-faker/commit/970930b31eb78e323b3c2881d26de7e9c7d581e7))
* object should not fake unknown fields when in strict mode ([2ac3cd7](https://github.com/soc221b/yup-schema-faker/commit/2ac3cd74ccf99a3493dae7e45a4de0731888ec3d))
* prevent stack overflow ([a861481](https://github.com/soc221b/yup-schema-faker/commit/a86148177fd2cce47b321367164f48a53531b4b7))
* random schema should be independent ([195277a](https://github.com/soc221b/yup-schema-faker/commit/195277ad3ffedd0c39fd51246713edf9ce9ffa1f))
* ref should works with context ([1b9711f](https://github.com/soc221b/yup-schema-faker/commit/1b9711fe3179c32ebb58d7a4cfde32548a0daedb))
* reference should be evaluated in the proper order ([16127ec](https://github.com/soc221b/yup-schema-faker/commit/16127ecd26755b7412d94d4e8a2bd8fdaef03a09))
* remove unknown fields if they are all undefined ([c85c260](https://github.com/soc221b/yup-schema-faker/commit/c85c260938f2a2b81d12441b15b550e6c01ff72c))
* required not allow null values ([d38791c](https://github.com/soc221b/yup-schema-faker/commit/d38791c1d0b967108f8d02cd851b34875ef4c30a))
* should logs on non-production mode ([a1dda46](https://github.com/soc221b/yup-schema-faker/commit/a1dda46765e358709f99da4b67c2da95d893ef5d))
* should not always generate default value ([1762d48](https://github.com/soc221b/yup-schema-faker/commit/1762d481d5de4876a364d2c36ded47e72e7ed68c))
* should not override RandExp prototype ([e35dae8](https://github.com/soc221b/yup-schema-faker/commit/e35dae8baac4b1428a734a4740e785ca45ad49dc))
* should not return undefeind if provide default ([b72e2c8](https://github.com/soc221b/yup-schema-faker/commit/b72e2c8d3876df243105f6f549b0319e5d1f4f58))
* string min length ([#278](https://github.com/soc221b/yup-schema-faker/issues/278)) ([c86ad65](https://github.com/soc221b/yup-schema-faker/commit/c86ad653ea21252305eefa95719530e59d21e7f5))
* the ReturnType of fakeFn should not be any ([f395403](https://github.com/soc221b/yup-schema-faker/commit/f3954035fbb40bc6f9a3938e0a7eaf36f6140033))
* transform case if strict ([9a8ebb5](https://github.com/soc221b/yup-schema-faker/commit/9a8ebb526d53eb5ebf6376324eb1dc44698e0092))
* trim if strict ([8621df2](https://github.com/soc221b/yup-schema-faker/commit/8621df211da18bdfd2de744a9bdf22dea54d5c64))
* use same Faker instance ([b9c1f79](https://github.com/soc221b/yup-schema-faker/commit/b9c1f792b83896ce98710bf4eb658fb499d0ae63))
* wrong interface ([d32b249](https://github.com/soc221b/yup-schema-faker/commit/d32b2496ab8f9d8a78964fcc8a6119c575437061))
* wrong number on edge case ([9143609](https://github.com/soc221b/yup-schema-faker/commit/9143609129d7b47a97cccb0953a1e577bd0552ad))
* wrong peer deps ([23ab795](https://github.com/soc221b/yup-schema-faker/commit/23ab795df3467ea2359bb54970c4abc43b48b7c9))


### Miscellaneous Chores

* update from faker to @faker-js/faker ([#166](https://github.com/soc221b/yup-schema-faker/issues/166)) ([cb9374a](https://github.com/soc221b/yup-schema-faker/commit/cb9374a498326bc4fa2ef2f387384dcf003f63e6))

## [5.0.2](https://github.com/soc221b/yup-schema-faker/compare/v5.0.1...v5.0.2) (2024-06-30)


### Bug Fixes

* string min length ([#278](https://github.com/soc221b/yup-schema-faker/issues/278)) ([c86ad65](https://github.com/soc221b/yup-schema-faker/commit/c86ad653ea21252305eefa95719530e59d21e7f5))

## [5.0.1](https://github.com/soc221b/yup-schema-faker/compare/v5.0.0...v5.0.1) (2024-06-16)


### Bug Fixes

* circular dependency ([#252](https://github.com/soc221b/yup-schema-faker/issues/252)) ([9ffd0a1](https://github.com/soc221b/yup-schema-faker/commit/9ffd0a117ce7cdec2e730b702b53a81c504b8012))
* **deps:** update dependency @vueuse/core to v10.11.0 ([#254](https://github.com/soc221b/yup-schema-faker/issues/254)) ([b6131b8](https://github.com/soc221b/yup-schema-faker/commit/b6131b83453eb15d4f0f9149f9d860ad988ba1b3))
* **deps:** update dependency highlight.js to v11 ([c641f3d](https://github.com/soc221b/yup-schema-faker/commit/c641f3d98767a86ddc72bbe86a2fd7bd229b517d))

## [5.0.0](https://github.com/iendeavor/yup-schema-faker/compare/v4.0.1...v5.0.0) (2022-08-16)


### ⚠ BREAKING CHANGES

* `faker` must now be passed to the `install` function

### Features

* add passing of Faker instance ([#182](https://github.com/iendeavor/yup-schema-faker/issues/182)) ([6cd4d29](https://github.com/iendeavor/yup-schema-faker/commit/6cd4d29b551d3817e7e6f1837c966448720354c6))


### Bug Fixes

* wrong peer deps ([23ab795](https://github.com/iendeavor/yup-schema-faker/commit/23ab795df3467ea2359bb54970c4abc43b48b7c9))

### [4.0.1](https://github.com/iendeavor/yup-schema-faker/compare/v4.0.0...v4.0.1) (2022-06-15)


### Bug Fixes

* **number:** max must larger than or equal to min ([970930b](https://github.com/iendeavor/yup-schema-faker/commit/970930b31eb78e323b3c2881d26de7e9c7d581e7))

### [4.0.0](https://github.com/iendeavor/yup-schema-faker/compare/v3.0.2...v4.0.0) (2022-06-10)


### Bug Fixes

* Support @faker-js/faker 7.2.0 https://github.com/iendeavor/yup-schema-faker/issues/179

### [3.0.2](https://github.com/iendeavor/yup-schema-faker/compare/v3.0.1...v3.0.2) (2022-04-02)


### Bug Fixes

* fakeFn's parameter schema should be same as given schema ([8b53bf2](https://github.com/iendeavor/yup-schema-faker/commit/8b53bf20d68ea17da785284ff06b1a6584c94153))
* should not override RandExp prototype ([e35dae8](https://github.com/iendeavor/yup-schema-faker/commit/e35dae8baac4b1428a734a4740e785ca45ad49dc))
* the ReturnType of fakeFn should not be any ([f395403](https://github.com/iendeavor/yup-schema-faker/commit/f3954035fbb40bc6f9a3938e0a7eaf36f6140033))

### [3.0.1](https://github.com/iendeavor/yup-schema-faker/compare/v3.0.0...v3.0.1) (2022-04-01)


### Bug Fixes

* hide private objects ([20407b4](https://github.com/iendeavor/yup-schema-faker/commit/20407b4bf00544263fbd1363e51a46ff8959d50d))
* random schema should be independent ([195277a](https://github.com/iendeavor/yup-schema-faker/commit/195277ad3ffedd0c39fd51246713edf9ce9ffa1f))

## [3.0.0](https://github.com/iendeavor/yup-schema-faker/compare/v2.32.0...v3.0.0) (2022-03-29)


### ⚠ BREAKING CHANGES

* need to explicitly call install function to install fakers
* drop support for Node.js 10 and 12

### Features

* expose install function, make it tree-shakeable ([16a72f6](https://github.com/iendeavor/yup-schema-faker/commit/16a72f6d7351948f0ffc56d61e45b9eec8880e42))


### Bug Fixes

* use same Faker instance ([b9c1f79](https://github.com/iendeavor/yup-schema-faker/commit/b9c1f792b83896ce98710bf4eb658fb499d0ae63))


* update from faker to @faker-js/faker ([#166](https://github.com/iendeavor/yup-schema-faker/issues/166)) ([cb9374a](https://github.com/iendeavor/yup-schema-faker/commit/cb9374a498326bc4fa2ef2f387384dcf003f63e6))

## [2.32.0](https://github.com/iendeavor/yup-schema-faker/compare/v1.6.0...v2.32.0) (2021-08-30)

## [1.6.0](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.9...v1.6.0) (2021-08-28)


### Features

* add strict option to fake ([4d9e4a9](https://github.com/iendeavor/yup-schema-faker/commit/4d9e4a99d1ec7870ce120a2adf40ee7f14a34c8b))
* to simulate cast when not in strict mode ([930b490](https://github.com/iendeavor/yup-schema-faker/commit/930b49039c9898b70296c0ac2ef10f1b6d0167d9))
* to simulate skipping coercion when not in strict mode ([4d53e85](https://github.com/iendeavor/yup-schema-faker/commit/4d53e8511a933199701a49a36bda68682af9b57f))


### Bug Fixes

* enable noUnknown will also enable stripUnknown when not in strict mode ([1759663](https://github.com/iendeavor/yup-schema-faker/commit/175966350fe39e7faeae8685fcf42d7a82ac291d))
* inherit strict mode ([fa3e8db](https://github.com/iendeavor/yup-schema-faker/commit/fa3e8db02bf41607ad7134065277884c5f2069f9))
* object should not fake unknown fields when in strict mode ([2ac3cd7](https://github.com/iendeavor/yup-schema-faker/commit/2ac3cd74ccf99a3493dae7e45a4de0731888ec3d))
* should not return undefeind if provide default ([b72e2c8](https://github.com/iendeavor/yup-schema-faker/commit/b72e2c8d3876df243105f6f549b0319e5d1f4f58))

### [1.5.9](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.8...v1.5.9) (2021-08-27)


### Bug Fixes

* should not always generate default value ([1762d48](https://github.com/iendeavor/yup-schema-faker/commit/1762d481d5de4876a364d2c36ded47e72e7ed68c))

### [1.5.8](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.7...v1.5.8) (2021-06-27)


### Bug Fixes

* remove unknown fields if they are all undefined ([c85c260](https://github.com/iendeavor/yup-schema-faker/commit/c85c260938f2a2b81d12441b15b550e6c01ff72c))

### [1.5.7](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.6...v1.5.7) (2021-06-19)

### [1.5.6](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.4...v1.5.6) (2021-06-01)


### Bug Fixes

* backward compatibility for faker ([136f6ff](https://github.com/iendeavor/yup-schema-faker/commit/136f6ff846e6dbfeeae82a3b893e79dbe3902d66))

### [1.5.5](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.4...v1.5.5) (2021-06-01)

### [1.5.4](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.3...v1.5.4) (2021-04-03)

### [1.5.3](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.2...v1.5.3) (2021-03-19)

### [1.5.2](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.1...v1.5.2) (2021-03-06)


### Bug Fixes

* failed to install ([65c5952](https://github.com/iendeavor/yup-schema-faker/commit/65c5952d096e4af1edd290df789e248ca7d70931))

### [1.5.1](https://github.com/iendeavor/yup-schema-faker/compare/v1.5.0...v1.5.1) (2021-03-03)

## [1.5.0](https://github.com/iendeavor/yup-schema-faker/compare/v1.4.0...v1.5.0) (2021-02-05)


### Features

* expose addFaker method to support custom schema ([715e4a7](https://github.com/iendeavor/yup-schema-faker/commit/715e4a7258d2bd597286ade52bd936e4f870938c))

## [1.4.0](https://github.com/iendeavor/yup-schema-faker/compare/v1.3.2...v1.4.0) (2021-02-04)


### Features

* expose fakeDedicatedTest method for custom schema fake implementation ([71675b5](https://github.com/iendeavor/yup-schema-faker/commit/71675b51bf7fa25282b20c9d318ee8d9859a1fcc))

### [1.3.2](https://github.com/iendeavor/yup-schema-faker/compare/v1.3.1...v1.3.2) (2021-02-02)


### Bug Fixes

* wrong interface ([d32b249](https://github.com/iendeavor/yup-schema-faker/commit/d32b2496ab8f9d8a78964fcc8a6119c575437061))

### [1.3.1](https://github.com/iendeavor/yup-schema-faker/compare/v1.3.0...v1.3.1) (2021-02-02)


### Bug Fixes

* mixed.when should works with context ([2946420](https://github.com/iendeavor/yup-schema-faker/commit/2946420af26b0d3bca8674eb71ebcc61abe460b3))
* ref should works with context ([1b9711f](https://github.com/iendeavor/yup-schema-faker/commit/1b9711fe3179c32ebb58d7a4cfde32548a0daedb))

## [1.3.0](https://github.com/iendeavor/yup-schema-faker/compare/v1.2.0...v1.3.0) (2021-02-01)


### Features

* support seed for string.matches ([d9f3c50](https://github.com/iendeavor/yup-schema-faker/commit/d9f3c50e34c05f3d2d24323deb5ae20c062ef968))

## [1.2.0](https://github.com/iendeavor/yup-schema-faker/compare/v1.1.5...v1.2.0) (2021-02-01)


### Features

* expose seed ([2eb3568](https://github.com/iendeavor/yup-schema-faker/commit/2eb35689c7fe6f2aaf4ab6dec0d4a085b667626e))


### Bug Fixes

* prevent stack overflow ([a861481](https://github.com/iendeavor/yup-schema-faker/commit/a86148177fd2cce47b321367164f48a53531b4b7))

### [1.1.6](https://github.com/iendeavor/yup-schema-faker/compare/v1.1.5...v1.1.6) (2021-02-01)


### Bug Fixes

* prevent stack overflow ([a861481](https://github.com/iendeavor/yup-schema-faker/commit/a86148177fd2cce47b321367164f48a53531b4b7))

### [1.1.5](https://github.com/iendeavor/yup-schema-faker/compare/v1.1.4...v1.1.5) (2021-01-31)


### Bug Fixes

* external class identity issue ([537e330](https://github.com/iendeavor/yup-schema-faker/commit/537e330e75f5041983925f7af69b18b7e2dbc311))

### [1.1.4](https://github.com/iendeavor/yup-schema-faker/compare/v1.1.3...v1.1.4) (2021-01-31)


### Bug Fixes

* generate known fields if strict ([2448f1b](https://github.com/iendeavor/yup-schema-faker/commit/2448f1b108f1b86f7a23e3303141564ef3589138))
* transform case if strict ([9a8ebb5](https://github.com/iendeavor/yup-schema-faker/commit/9a8ebb526d53eb5ebf6376324eb1dc44698e0092))
* trim if strict ([8621df2](https://github.com/iendeavor/yup-schema-faker/commit/8621df211da18bdfd2de744a9bdf22dea54d5c64))
* wrong number on edge case ([9143609](https://github.com/iendeavor/yup-schema-faker/commit/9143609129d7b47a97cccb0953a1e577bd0552ad))

### [1.1.3](https://github.com/iendeavor/yup-schema-faker/compare/v1.1.2...v1.1.3) (2021-01-31)


### Bug Fixes

* min, max, and length may be used together ([1265f24](https://github.com/iendeavor/yup-schema-faker/commit/1265f24c4be0e8a10d4020ce8c4da742cb137bee))
* reference should be evaluated in the proper order ([16127ec](https://github.com/iendeavor/yup-schema-faker/commit/16127ecd26755b7412d94d4e8a2bd8fdaef03a09))

### [1.1.2](https://github.com/iendeavor/yup-schema-faker/compare/v1.1.1...v1.1.2) (2021-01-31)


### Bug Fixes

* empty string for string.required is considered as invalid value ([039c1a1](https://github.com/iendeavor/yup-schema-faker/commit/039c1a1c8762a16badf06d45613654fabf1459ff))

### [1.1.1](https://github.com/iendeavor/yup-schema-faker/compare/v1.1.0...v1.1.1) (2021-01-31)


### Bug Fixes

* required not allow null values ([d38791c](https://github.com/iendeavor/yup-schema-faker/commit/d38791c1d0b967108f8d02cd851b34875ef4c30a))

## [1.1.0](https://github.com/iendeavor/yup-schema-faker/compare/v1.0.1...v1.1.0) (2021-01-29)


### Features

* fake simple mixed schema ([e4069a2](https://github.com/iendeavor/yup-schema-faker/commit/e4069a29db7abb12d8410cb2a1fce6b86a833ffc))

### [1.0.1](https://github.com/iendeavor/yup-schema-faker/compare/v1.0.0...v1.0.1) (2021-01-29)

## [1.0.0](https://github.com/iendeavor/yup-schema-faker/compare/v0.5.3...v1.0.0) (2021-01-21)


### Features

* implement notOneOf ([4433db5](https://github.com/iendeavor/yup-schema-faker/commit/4433db598d117cfeef69e751b5f79e16951f2491))

### [0.5.3](https://github.com/iendeavor/yup-schema-faker/compare/v0.5.2...v0.5.3) (2021-01-20)

### [0.5.2](https://github.com/iendeavor/yup-schema-faker/compare/v0.5.1...v0.5.2) (2021-01-20)


### Features

* export version info ([ffae155](https://github.com/iendeavor/yup-schema-faker/commit/ffae1555d3a887ee4833cad3b0747a1367bc7d8c))

### [0.5.1](https://github.com/iendeavor/yup-schema-faker/compare/v0.5.0...v0.5.1) (2021-01-20)


### Bug Fixes

* date should be Date instance ([04af557](https://github.com/iendeavor/yup-schema-faker/commit/04af55743e92c173263c8173725698fd790c9ad0))

## [0.5.0](https://github.com/iendeavor/yup-schema-faker/compare/v0.4.2...v0.5.0) (2021-01-18)

### [0.4.2](https://github.com/iendeavor/yup-schema-faker/compare/v0.4.1...v0.4.2) (2021-01-17)

### [0.4.1](https://github.com/iendeavor/yup-schema-faker/compare/v0.4.0...v0.4.1) (2021-01-17)


### Bug Fixes

* missing type ([e3bd588](https://github.com/iendeavor/yup-schema-faker/commit/e3bd5887fd191269a486d9c53c70302006a87199))

## [0.4.0](https://github.com/iendeavor/yup-schema-faker/compare/v0.3.0...v0.4.0) (2021-01-17)


### Features

* add typings ([b06a7df](https://github.com/iendeavor/yup-schema-faker/commit/b06a7dfe36680722977e751782d903d245e743f9))

## [0.3.0](https://github.com/iendeavor/yup-schema-faker/compare/v0.2.0...v0.3.0) (2021-01-17)


### Features

* implement boolean methods ([1bdf4ce](https://github.com/iendeavor/yup-schema-faker/commit/1bdf4ced49e8438911cd7c67ab104303c4116c04))
* implement lazy ([1e25103](https://github.com/iendeavor/yup-schema-faker/commit/1e25103204aaaac0d45c1bafcb4ce12304d1c60f))
* implement mixed.defined ([abba2d0](https://github.com/iendeavor/yup-schema-faker/commit/abba2d0233f5226f5cc8e6eedd7136350d7185d9))
* implement mixed.nullable ([a9094bc](https://github.com/iendeavor/yup-schema-faker/commit/a9094bc4eff129afcfe95b1402e03dca5f93af5c))
* implement mixed.when ([3551544](https://github.com/iendeavor/yup-schema-faker/commit/3551544ea9907bd2c6687deab2a72860c6f74eb5))
* implement ref ([90010a2](https://github.com/iendeavor/yup-schema-faker/commit/90010a21b518ee899961ea8088bf5851cf2da4b3))


### Bug Fixes

* should logs on non-production mode ([a1dda46](https://github.com/iendeavor/yup-schema-faker/commit/a1dda46765e358709f99da4b67c2da95d893ef5d))

## [0.2.0](https://github.com/iendeavor/yup-schema-faker/compare/v0.1.3...v0.2.0) (2021-01-17)


### Features

* implement mixed.default ([6e1fdad](https://github.com/iendeavor/yup-schema-faker/commit/6e1fdad5c94326d578d6d41718bbc38aef8858b1))
* implement mixed.oneOf ([9307aa4](https://github.com/iendeavor/yup-schema-faker/commit/9307aa4d60dd5dd2ef6f58862b8bf9538ffb010f))

### [0.1.3](https://github.com/iendeavor/yup-schema-faker/compare/v0.1.1...v0.1.3) (2021-01-16)


### Features

* export built-in fakers ([29841c8](https://github.com/iendeavor/yup-schema-faker/commit/29841c8ce412b5ad22b09172e0b827d8d01e3b78))
* implement array methods ([2065d04](https://github.com/iendeavor/yup-schema-faker/commit/2065d0491ebdcd1cdde52c85aebe9baffb24ef0f))
* implement boolean methods ([501e827](https://github.com/iendeavor/yup-schema-faker/commit/501e8272917f42be90e734ebbb39d03cfc5a818f))
* implement date methods ([0c7e338](https://github.com/iendeavor/yup-schema-faker/commit/0c7e338b18405525dce1a62c361db5fd7a9dcdbb))
* implement date methods ([af385a6](https://github.com/iendeavor/yup-schema-faker/commit/af385a635f4bdb95c322f3ec714ba37e675a3487))
* implement mixed methods ([53087af](https://github.com/iendeavor/yup-schema-faker/commit/53087afd203b44e653d0b55b5900a79bc7ec4d9f))
* implement number methods ([7e5672e](https://github.com/iendeavor/yup-schema-faker/commit/7e5672ea1cf9c008f5008858db65fe83c227e0e0))
* implement object methods ([dc0b829](https://github.com/iendeavor/yup-schema-faker/commit/dc0b8294e3e0b3c01ffba43672521d3f83b0bdb2))
* implement string methods ([3f075d8](https://github.com/iendeavor/yup-schema-faker/commit/3f075d8086b27002b24d1e414442174153c1acef))
* implement string methods ([ba023f2](https://github.com/iendeavor/yup-schema-faker/commit/ba023f2ae40352c7a855c474579bed8eef1fc1c1))

### 0.1.2 (2021-01-15)


### Features

* export built-in fakers ([b68f2a2](https://github.com/iendeavor/yup-schema-faker/commit/b68f2a250f824e8a75e2f227915381aff8cba9be))
* implement ([df4ee1d](https://github.com/iendeavor/yup-schema-faker/commit/df4ee1dd4d5e2c4b9fbad11b48ccbdf9fc6f8c0f))

### 0.1.1 (2021-01-14)


### Features

* implement ([df4ee1d](https://github.com/iendeavor/yup-schema-faker/commit/df4ee1dd4d5e2c4b9fbad11b48ccbdf9fc6f8c0f))
