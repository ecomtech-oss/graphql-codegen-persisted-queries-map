export const project2Documents = [
  {
    rawSDL:
      '\n  fragment getContactsBySupplier on SrmSupplier {\n    contactPersons {\n      id\n      name\n      jobTitle\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getContactsBySupplier',
            loc: {
              start: 12,
              end: 33,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmSupplier',
              loc: {
                start: 37,
                end: 48,
              },
            },
            loc: {
              start: 37,
              end: 48,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'contactPersons',
                  loc: {
                    start: 55,
                    end: 69,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 78,
                          end: 80,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 78,
                        end: 80,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 87,
                          end: 91,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 87,
                        end: 91,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'jobTitle',
                        loc: {
                          start: 98,
                          end: 106,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 98,
                        end: 106,
                      },
                    },
                  ],
                  loc: {
                    start: 70,
                    end: 112,
                  },
                },
                loc: {
                  start: 55,
                  end: 112,
                },
              },
            ],
            loc: {
              start: 49,
              end: 116,
            },
          },
          loc: {
            start: 3,
            end: 116,
          },
        },
      ],
    },
    location: '',
    hash: 'd4c461d6d57e449c01f64f45ff40475fb5eb9f3abe60baca1daf82b0fe0e8f10',
  },
  {
    rawSDL:
      '\n  query getContactsBySupplier($ids: [UUID!]) {\n    srmSuppliers(id: $ids) {\n      edges {\n        node {\n          ...getContactsBySupplier\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getContactsBySupplier',
            loc: {
              start: 9,
              end: 30,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'ids',
                  loc: {
                    start: 32,
                    end: 35,
                  },
                },
                loc: {
                  start: 31,
                  end: 35,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 38,
                        end: 42,
                      },
                    },
                    loc: {
                      start: 38,
                      end: 42,
                    },
                  },
                  loc: {
                    start: 38,
                    end: 43,
                  },
                },
                loc: {
                  start: 37,
                  end: 44,
                },
              },
              directives: [],
              loc: {
                start: 31,
                end: 44,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmSuppliers',
                  loc: {
                    start: 52,
                    end: 64,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 65,
                        end: 67,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'ids',
                        loc: {
                          start: 70,
                          end: 73,
                        },
                      },
                      loc: {
                        start: 69,
                        end: 73,
                      },
                    },
                    loc: {
                      start: 65,
                      end: 73,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 83,
                          end: 88,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 99,
                                end: 103,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getContactsBySupplier',
                                    loc: {
                                      start: 119,
                                      end: 140,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 116,
                                    end: 140,
                                  },
                                },
                              ],
                              loc: {
                                start: 104,
                                end: 150,
                              },
                            },
                            loc: {
                              start: 99,
                              end: 150,
                            },
                          },
                        ],
                        loc: {
                          start: 89,
                          end: 158,
                        },
                      },
                      loc: {
                        start: 83,
                        end: 158,
                      },
                    },
                  ],
                  loc: {
                    start: 75,
                    end: 164,
                  },
                },
                loc: {
                  start: 52,
                  end: 164,
                },
              },
            ],
            loc: {
              start: 46,
              end: 168,
            },
          },
          loc: {
            start: 3,
            end: 168,
          },
        },
      ],
    },
    location: '',
    hash: 'b60353981cd925b89389234587619cc6d8b186bd0f90c72630be915628e9cb96',
  },
  {
    rawSDL:
      '\n  fragment getContract on SrmContract {\n    cities {\n      name\n    }\n    dcCities {\n      directCities {\n        name\n      }\n      transitCities {\n        name\n      }\n    }\n    endDate\n    id\n    guid\n    name\n    number\n    ownBrand\n    vatPayer\n    startDate\n    status\n    productCategories {\n      name\n    }\n    categoryManager {\n      firstName\n      lastName\n    }\n    warnings {\n      code\n    }\n    supplier {\n      id\n      name\n      enterpriseNumber\n      contactPersons {\n        id\n        email\n        phone\n      }\n    }\n    priceUpdateFrequency\n    contactPerson {\n      id\n      email\n      phone\n      name\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getContract',
            loc: {
              start: 12,
              end: 23,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmContract',
              loc: {
                start: 27,
                end: 38,
              },
            },
            loc: {
              start: 27,
              end: 38,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'cities',
                  loc: {
                    start: 45,
                    end: 51,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 60,
                          end: 64,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 60,
                        end: 64,
                      },
                    },
                  ],
                  loc: {
                    start: 52,
                    end: 70,
                  },
                },
                loc: {
                  start: 45,
                  end: 70,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'dcCities',
                  loc: {
                    start: 75,
                    end: 83,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'directCities',
                        loc: {
                          start: 92,
                          end: 104,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 115,
                                end: 119,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 115,
                              end: 119,
                            },
                          },
                        ],
                        loc: {
                          start: 105,
                          end: 127,
                        },
                      },
                      loc: {
                        start: 92,
                        end: 127,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'transitCities',
                        loc: {
                          start: 134,
                          end: 147,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 158,
                                end: 162,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 158,
                              end: 162,
                            },
                          },
                        ],
                        loc: {
                          start: 148,
                          end: 170,
                        },
                      },
                      loc: {
                        start: 134,
                        end: 170,
                      },
                    },
                  ],
                  loc: {
                    start: 84,
                    end: 176,
                  },
                },
                loc: {
                  start: 75,
                  end: 176,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'endDate',
                  loc: {
                    start: 181,
                    end: 188,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 181,
                  end: 188,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 193,
                    end: 195,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 193,
                  end: 195,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'guid',
                  loc: {
                    start: 200,
                    end: 204,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 200,
                  end: 204,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 209,
                    end: 213,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 209,
                  end: 213,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'number',
                  loc: {
                    start: 218,
                    end: 224,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 218,
                  end: 224,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'ownBrand',
                  loc: {
                    start: 229,
                    end: 237,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 229,
                  end: 237,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'vatPayer',
                  loc: {
                    start: 242,
                    end: 250,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 242,
                  end: 250,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'startDate',
                  loc: {
                    start: 255,
                    end: 264,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 255,
                  end: 264,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'status',
                  loc: {
                    start: 269,
                    end: 275,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 269,
                  end: 275,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'productCategories',
                  loc: {
                    start: 280,
                    end: 297,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 306,
                          end: 310,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 306,
                        end: 310,
                      },
                    },
                  ],
                  loc: {
                    start: 298,
                    end: 316,
                  },
                },
                loc: {
                  start: 280,
                  end: 316,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'categoryManager',
                  loc: {
                    start: 321,
                    end: 336,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'firstName',
                        loc: {
                          start: 345,
                          end: 354,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 345,
                        end: 354,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'lastName',
                        loc: {
                          start: 361,
                          end: 369,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 361,
                        end: 369,
                      },
                    },
                  ],
                  loc: {
                    start: 337,
                    end: 375,
                  },
                },
                loc: {
                  start: 321,
                  end: 375,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'warnings',
                  loc: {
                    start: 380,
                    end: 388,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'code',
                        loc: {
                          start: 397,
                          end: 401,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 397,
                        end: 401,
                      },
                    },
                  ],
                  loc: {
                    start: 389,
                    end: 407,
                  },
                },
                loc: {
                  start: 380,
                  end: 407,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'supplier',
                  loc: {
                    start: 412,
                    end: 420,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 429,
                          end: 431,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 429,
                        end: 431,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 438,
                          end: 442,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 438,
                        end: 442,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'enterpriseNumber',
                        loc: {
                          start: 449,
                          end: 465,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 449,
                        end: 465,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'contactPersons',
                        loc: {
                          start: 472,
                          end: 486,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'id',
                              loc: {
                                start: 497,
                                end: 499,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 497,
                              end: 499,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'email',
                              loc: {
                                start: 508,
                                end: 513,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 508,
                              end: 513,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'phone',
                              loc: {
                                start: 522,
                                end: 527,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 522,
                              end: 527,
                            },
                          },
                        ],
                        loc: {
                          start: 487,
                          end: 535,
                        },
                      },
                      loc: {
                        start: 472,
                        end: 535,
                      },
                    },
                  ],
                  loc: {
                    start: 421,
                    end: 541,
                  },
                },
                loc: {
                  start: 412,
                  end: 541,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'priceUpdateFrequency',
                  loc: {
                    start: 546,
                    end: 566,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 546,
                  end: 566,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'contactPerson',
                  loc: {
                    start: 571,
                    end: 584,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 593,
                          end: 595,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 593,
                        end: 595,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'email',
                        loc: {
                          start: 602,
                          end: 607,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 602,
                        end: 607,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'phone',
                        loc: {
                          start: 614,
                          end: 619,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 614,
                        end: 619,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 626,
                          end: 630,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 626,
                        end: 630,
                      },
                    },
                  ],
                  loc: {
                    start: 585,
                    end: 636,
                  },
                },
                loc: {
                  start: 571,
                  end: 636,
                },
              },
            ],
            loc: {
              start: 39,
              end: 640,
            },
          },
          loc: {
            start: 3,
            end: 640,
          },
        },
      ],
    },
    location: '',
    hash: '90e18ef8b59c080b88874333861bba24c251348588f091cff5a64e786104bd5b',
  },
  {
    rawSDL: '\n  query getContract($id: UUID!) {\n    srmContract(id: $id) {\n      ...getContract\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getContract',
            loc: {
              start: 9,
              end: 20,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 22,
                    end: 24,
                  },
                },
                loc: {
                  start: 21,
                  end: 24,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 26,
                      end: 30,
                    },
                  },
                  loc: {
                    start: 26,
                    end: 30,
                  },
                },
                loc: {
                  start: 26,
                  end: 31,
                },
              },
              directives: [],
              loc: {
                start: 21,
                end: 31,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmContract',
                  loc: {
                    start: 39,
                    end: 50,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 51,
                        end: 53,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 56,
                          end: 58,
                        },
                      },
                      loc: {
                        start: 55,
                        end: 58,
                      },
                    },
                    loc: {
                      start: 51,
                      end: 58,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'FragmentSpread',
                      name: {
                        kind: 'Name',
                        value: 'getContract',
                        loc: {
                          start: 71,
                          end: 82,
                        },
                      },
                      directives: [],
                      loc: {
                        start: 68,
                        end: 82,
                      },
                    },
                  ],
                  loc: {
                    start: 60,
                    end: 88,
                  },
                },
                loc: {
                  start: 39,
                  end: 88,
                },
              },
            ],
            loc: {
              start: 33,
              end: 92,
            },
          },
          loc: {
            start: 3,
            end: 92,
          },
        },
      ],
    },
    location: '',
    hash: 'a6155cc36f93ece83f4ec2a029c48c5bc05bc21ddd4f26944195089aed2f3d58',
  },
  {
    rawSDL:
      '\n  fragment getContracts on SrmContract {\n    name\n    supplier {\n      name\n    }\n    cities {\n      name\n    }\n    status\n    startDate\n    endDate\n    id\n    productCategories {\n      name\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getContracts',
            loc: {
              start: 12,
              end: 24,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmContract',
              loc: {
                start: 28,
                end: 39,
              },
            },
            loc: {
              start: 28,
              end: 39,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 46,
                    end: 50,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 46,
                  end: 50,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'supplier',
                  loc: {
                    start: 55,
                    end: 63,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 72,
                          end: 76,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 72,
                        end: 76,
                      },
                    },
                  ],
                  loc: {
                    start: 64,
                    end: 82,
                  },
                },
                loc: {
                  start: 55,
                  end: 82,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'cities',
                  loc: {
                    start: 87,
                    end: 93,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 102,
                          end: 106,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 102,
                        end: 106,
                      },
                    },
                  ],
                  loc: {
                    start: 94,
                    end: 112,
                  },
                },
                loc: {
                  start: 87,
                  end: 112,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'status',
                  loc: {
                    start: 117,
                    end: 123,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 117,
                  end: 123,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'startDate',
                  loc: {
                    start: 128,
                    end: 137,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 128,
                  end: 137,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'endDate',
                  loc: {
                    start: 142,
                    end: 149,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 142,
                  end: 149,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 154,
                    end: 156,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 154,
                  end: 156,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'productCategories',
                  loc: {
                    start: 161,
                    end: 178,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 187,
                          end: 191,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 187,
                        end: 191,
                      },
                    },
                  ],
                  loc: {
                    start: 179,
                    end: 197,
                  },
                },
                loc: {
                  start: 161,
                  end: 197,
                },
              },
            ],
            loc: {
              start: 40,
              end: 201,
            },
          },
          loc: {
            start: 3,
            end: 201,
          },
        },
      ],
    },
    location: '',
    hash: '90d9ee8bdfaffaf048f58866c9a17986214307123d0614b9bff76e6425410e59',
  },
  {
    rawSDL:
      '\n  query getContracts(\n    $first: Int\n    $after: String\n    $sortBy: SrmSortByContractsInput\n    $searchQuery: String\n    $supplierIds: [UUID!]\n    $cityIds: [UUID!]\n    $status: [String!]\n    $productCategoryIds: [UUID!]\n  ) {\n    srmContracts(\n      first: $first\n      after: $after\n      sortBy: $sortBy\n      searchQuery: $searchQuery\n      supplierIds: $supplierIds\n      cityIds: $cityIds\n      status: $status\n      productCategoryIds: $productCategoryIds\n    ) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...getContracts\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getContracts',
            loc: {
              start: 9,
              end: 21,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 28,
                    end: 33,
                  },
                },
                loc: {
                  start: 27,
                  end: 33,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 35,
                    end: 38,
                  },
                },
                loc: {
                  start: 35,
                  end: 38,
                },
              },
              directives: [],
              loc: {
                start: 27,
                end: 38,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 44,
                    end: 49,
                  },
                },
                loc: {
                  start: 43,
                  end: 49,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 51,
                    end: 57,
                  },
                },
                loc: {
                  start: 51,
                  end: 57,
                },
              },
              directives: [],
              loc: {
                start: 43,
                end: 57,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'sortBy',
                  loc: {
                    start: 63,
                    end: 69,
                  },
                },
                loc: {
                  start: 62,
                  end: 69,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'SrmSortByContractsInput',
                  loc: {
                    start: 71,
                    end: 94,
                  },
                },
                loc: {
                  start: 71,
                  end: 94,
                },
              },
              directives: [],
              loc: {
                start: 62,
                end: 94,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'searchQuery',
                  loc: {
                    start: 100,
                    end: 111,
                  },
                },
                loc: {
                  start: 99,
                  end: 111,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 113,
                    end: 119,
                  },
                },
                loc: {
                  start: 113,
                  end: 119,
                },
              },
              directives: [],
              loc: {
                start: 99,
                end: 119,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'supplierIds',
                  loc: {
                    start: 125,
                    end: 136,
                  },
                },
                loc: {
                  start: 124,
                  end: 136,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 139,
                        end: 143,
                      },
                    },
                    loc: {
                      start: 139,
                      end: 143,
                    },
                  },
                  loc: {
                    start: 139,
                    end: 144,
                  },
                },
                loc: {
                  start: 138,
                  end: 145,
                },
              },
              directives: [],
              loc: {
                start: 124,
                end: 145,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'cityIds',
                  loc: {
                    start: 151,
                    end: 158,
                  },
                },
                loc: {
                  start: 150,
                  end: 158,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 161,
                        end: 165,
                      },
                    },
                    loc: {
                      start: 161,
                      end: 165,
                    },
                  },
                  loc: {
                    start: 161,
                    end: 166,
                  },
                },
                loc: {
                  start: 160,
                  end: 167,
                },
              },
              directives: [],
              loc: {
                start: 150,
                end: 167,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'status',
                  loc: {
                    start: 173,
                    end: 179,
                  },
                },
                loc: {
                  start: 172,
                  end: 179,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'String',
                      loc: {
                        start: 182,
                        end: 188,
                      },
                    },
                    loc: {
                      start: 182,
                      end: 188,
                    },
                  },
                  loc: {
                    start: 182,
                    end: 189,
                  },
                },
                loc: {
                  start: 181,
                  end: 190,
                },
              },
              directives: [],
              loc: {
                start: 172,
                end: 190,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'productCategoryIds',
                  loc: {
                    start: 196,
                    end: 214,
                  },
                },
                loc: {
                  start: 195,
                  end: 214,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 217,
                        end: 221,
                      },
                    },
                    loc: {
                      start: 217,
                      end: 221,
                    },
                  },
                  loc: {
                    start: 217,
                    end: 222,
                  },
                },
                loc: {
                  start: 216,
                  end: 223,
                },
              },
              directives: [],
              loc: {
                start: 195,
                end: 223,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmContracts',
                  loc: {
                    start: 234,
                    end: 246,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 254,
                        end: 259,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 262,
                          end: 267,
                        },
                      },
                      loc: {
                        start: 261,
                        end: 267,
                      },
                    },
                    loc: {
                      start: 254,
                      end: 267,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 274,
                        end: 279,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 282,
                          end: 287,
                        },
                      },
                      loc: {
                        start: 281,
                        end: 287,
                      },
                    },
                    loc: {
                      start: 274,
                      end: 287,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'sortBy',
                      loc: {
                        start: 294,
                        end: 300,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'sortBy',
                        loc: {
                          start: 303,
                          end: 309,
                        },
                      },
                      loc: {
                        start: 302,
                        end: 309,
                      },
                    },
                    loc: {
                      start: 294,
                      end: 309,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 316,
                        end: 327,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'searchQuery',
                        loc: {
                          start: 330,
                          end: 341,
                        },
                      },
                      loc: {
                        start: 329,
                        end: 341,
                      },
                    },
                    loc: {
                      start: 316,
                      end: 341,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'supplierIds',
                      loc: {
                        start: 348,
                        end: 359,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'supplierIds',
                        loc: {
                          start: 362,
                          end: 373,
                        },
                      },
                      loc: {
                        start: 361,
                        end: 373,
                      },
                    },
                    loc: {
                      start: 348,
                      end: 373,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'cityIds',
                      loc: {
                        start: 380,
                        end: 387,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'cityIds',
                        loc: {
                          start: 390,
                          end: 397,
                        },
                      },
                      loc: {
                        start: 389,
                        end: 397,
                      },
                    },
                    loc: {
                      start: 380,
                      end: 397,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'status',
                      loc: {
                        start: 404,
                        end: 410,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'status',
                        loc: {
                          start: 413,
                          end: 419,
                        },
                      },
                      loc: {
                        start: 412,
                        end: 419,
                      },
                    },
                    loc: {
                      start: 404,
                      end: 419,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'productCategoryIds',
                      loc: {
                        start: 426,
                        end: 444,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'productCategoryIds',
                        loc: {
                          start: 447,
                          end: 465,
                        },
                      },
                      loc: {
                        start: 446,
                        end: 465,
                      },
                    },
                    loc: {
                      start: 426,
                      end: 465,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 480,
                          end: 488,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 499,
                                end: 510,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 499,
                              end: 510,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 519,
                                end: 528,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 519,
                              end: 528,
                            },
                          },
                        ],
                        loc: {
                          start: 489,
                          end: 536,
                        },
                      },
                      loc: {
                        start: 480,
                        end: 536,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 543,
                          end: 553,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 543,
                        end: 553,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 560,
                          end: 565,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 576,
                                end: 580,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getContracts',
                                    loc: {
                                      start: 596,
                                      end: 608,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 593,
                                    end: 608,
                                  },
                                },
                              ],
                              loc: {
                                start: 581,
                                end: 618,
                              },
                            },
                            loc: {
                              start: 576,
                              end: 618,
                            },
                          },
                        ],
                        loc: {
                          start: 566,
                          end: 626,
                        },
                      },
                      loc: {
                        start: 560,
                        end: 626,
                      },
                    },
                  ],
                  loc: {
                    start: 472,
                    end: 632,
                  },
                },
                loc: {
                  start: 234,
                  end: 632,
                },
              },
            ],
            loc: {
              start: 228,
              end: 636,
            },
          },
          loc: {
            start: 3,
            end: 636,
          },
        },
      ],
    },
    location: '',
    hash: '7c9ef989d224e847ae57517480e599928b195e5c9bd83d2ec8df1c7ff3a8edf6',
  },
  {
    rawSDL:
      '\n  mutation updateContract($contractId: UUID!, $contractParams: SrmUpdateContractInput!) {\n    srmUpdateContract(contractId: $contractId, contractParams: $contractParams) {\n      ...getContract\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'mutation',
          name: {
            kind: 'Name',
            value: 'updateContract',
            loc: {
              start: 12,
              end: 26,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'contractId',
                  loc: {
                    start: 28,
                    end: 38,
                  },
                },
                loc: {
                  start: 27,
                  end: 38,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 40,
                      end: 44,
                    },
                  },
                  loc: {
                    start: 40,
                    end: 44,
                  },
                },
                loc: {
                  start: 40,
                  end: 45,
                },
              },
              directives: [],
              loc: {
                start: 27,
                end: 45,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'contractParams',
                  loc: {
                    start: 48,
                    end: 62,
                  },
                },
                loc: {
                  start: 47,
                  end: 62,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'SrmUpdateContractInput',
                    loc: {
                      start: 64,
                      end: 86,
                    },
                  },
                  loc: {
                    start: 64,
                    end: 86,
                  },
                },
                loc: {
                  start: 64,
                  end: 87,
                },
              },
              directives: [],
              loc: {
                start: 47,
                end: 87,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmUpdateContract',
                  loc: {
                    start: 95,
                    end: 112,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'contractId',
                      loc: {
                        start: 113,
                        end: 123,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'contractId',
                        loc: {
                          start: 126,
                          end: 136,
                        },
                      },
                      loc: {
                        start: 125,
                        end: 136,
                      },
                    },
                    loc: {
                      start: 113,
                      end: 136,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'contractParams',
                      loc: {
                        start: 138,
                        end: 152,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'contractParams',
                        loc: {
                          start: 155,
                          end: 169,
                        },
                      },
                      loc: {
                        start: 154,
                        end: 169,
                      },
                    },
                    loc: {
                      start: 138,
                      end: 169,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'FragmentSpread',
                      name: {
                        kind: 'Name',
                        value: 'getContract',
                        loc: {
                          start: 182,
                          end: 193,
                        },
                      },
                      directives: [],
                      loc: {
                        start: 179,
                        end: 193,
                      },
                    },
                  ],
                  loc: {
                    start: 171,
                    end: 199,
                  },
                },
                loc: {
                  start: 95,
                  end: 199,
                },
              },
            ],
            loc: {
              start: 89,
              end: 203,
            },
          },
          loc: {
            start: 3,
            end: 203,
          },
        },
      ],
    },
    location: '',
    hash: '0d04d69ad9d47840c69ff8d34d3bbc8298a75ecc046191ec094b640c877ea7b5',
  },
  {
    rawSDL:
      '\n  mutation createPriceList($contractId: UUID!, $importParams: SrmImportPriceListInput!) {\n    srmCreateImportPriceList(contractId: $contractId, importParams: $importParams) {\n      ...priceList\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'mutation',
          name: {
            kind: 'Name',
            value: 'createPriceList',
            loc: {
              start: 12,
              end: 27,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'contractId',
                  loc: {
                    start: 29,
                    end: 39,
                  },
                },
                loc: {
                  start: 28,
                  end: 39,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 41,
                      end: 45,
                    },
                  },
                  loc: {
                    start: 41,
                    end: 45,
                  },
                },
                loc: {
                  start: 41,
                  end: 46,
                },
              },
              directives: [],
              loc: {
                start: 28,
                end: 46,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'importParams',
                  loc: {
                    start: 49,
                    end: 61,
                  },
                },
                loc: {
                  start: 48,
                  end: 61,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'SrmImportPriceListInput',
                    loc: {
                      start: 63,
                      end: 86,
                    },
                  },
                  loc: {
                    start: 63,
                    end: 86,
                  },
                },
                loc: {
                  start: 63,
                  end: 87,
                },
              },
              directives: [],
              loc: {
                start: 48,
                end: 87,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmCreateImportPriceList',
                  loc: {
                    start: 95,
                    end: 119,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'contractId',
                      loc: {
                        start: 120,
                        end: 130,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'contractId',
                        loc: {
                          start: 133,
                          end: 143,
                        },
                      },
                      loc: {
                        start: 132,
                        end: 143,
                      },
                    },
                    loc: {
                      start: 120,
                      end: 143,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'importParams',
                      loc: {
                        start: 145,
                        end: 157,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'importParams',
                        loc: {
                          start: 160,
                          end: 172,
                        },
                      },
                      loc: {
                        start: 159,
                        end: 172,
                      },
                    },
                    loc: {
                      start: 145,
                      end: 172,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'FragmentSpread',
                      name: {
                        kind: 'Name',
                        value: 'priceList',
                        loc: {
                          start: 185,
                          end: 194,
                        },
                      },
                      directives: [],
                      loc: {
                        start: 182,
                        end: 194,
                      },
                    },
                  ],
                  loc: {
                    start: 174,
                    end: 200,
                  },
                },
                loc: {
                  start: 95,
                  end: 200,
                },
              },
            ],
            loc: {
              start: 89,
              end: 204,
            },
          },
          loc: {
            start: 3,
            end: 204,
          },
        },
      ],
    },
    location: '',
    hash: '7b66f844b210330533f19aa390f63cd11ccfddf3193e905890eb40fc4c308f49',
  },
  {
    location: '',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'priceList',
            loc: {
              start: 9,
              end: 18,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmPriceList',
              loc: {
                start: 22,
                end: 34,
              },
            },
            loc: {
              start: 22,
              end: 34,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 39,
                    end: 41,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 39,
                  end: 41,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 44,
                    end: 48,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 44,
                  end: 48,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'type',
                  loc: {
                    start: 51,
                    end: 55,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 51,
                  end: 55,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'createdAt',
                  loc: {
                    start: 58,
                    end: 67,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 58,
                  end: 67,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'createdBy',
                  loc: {
                    start: 70,
                    end: 79,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'firstName',
                        loc: {
                          start: 86,
                          end: 95,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 86,
                        end: 95,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'lastName',
                        loc: {
                          start: 100,
                          end: 108,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 100,
                        end: 108,
                      },
                    },
                  ],
                  loc: {
                    start: 80,
                    end: 112,
                  },
                },
                loc: {
                  start: 70,
                  end: 112,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'startDate',
                  loc: {
                    start: 115,
                    end: 124,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 115,
                  end: 124,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'endDate',
                  loc: {
                    start: 127,
                    end: 134,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 127,
                  end: 134,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'activationDate',
                  loc: {
                    start: 137,
                    end: 151,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 137,
                  end: 151,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'isFutureDateActivation',
                  loc: {
                    start: 154,
                    end: 176,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 154,
                  end: 176,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'status',
                  loc: {
                    start: 179,
                    end: 185,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 179,
                  end: 185,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'productCategories',
                  loc: {
                    start: 188,
                    end: 205,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 212,
                          end: 216,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 212,
                        end: 216,
                      },
                    },
                  ],
                  loc: {
                    start: 206,
                    end: 220,
                  },
                },
                loc: {
                  start: 188,
                  end: 220,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'priceListsGeo',
                  loc: {
                    start: 223,
                    end: 236,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'deliverySchemaCode',
                        loc: {
                          start: 243,
                          end: 261,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 243,
                        end: 261,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'cities',
                        loc: {
                          start: 266,
                          end: 272,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'id',
                              loc: {
                                start: 281,
                                end: 283,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 281,
                              end: 283,
                            },
                          },
                        ],
                        loc: {
                          start: 273,
                          end: 289,
                        },
                      },
                      loc: {
                        start: 266,
                        end: 289,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'nodes',
                        loc: {
                          start: 294,
                          end: 299,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'id',
                              loc: {
                                start: 308,
                                end: 310,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 308,
                              end: 310,
                            },
                          },
                        ],
                        loc: {
                          start: 300,
                          end: 316,
                        },
                      },
                      loc: {
                        start: 294,
                        end: 316,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'distributionCenters',
                        loc: {
                          start: 321,
                          end: 340,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'city',
                              loc: {
                                start: 349,
                                end: 353,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'id',
                                    loc: {
                                      start: 364,
                                      end: 366,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 364,
                                    end: 366,
                                  },
                                },
                              ],
                              loc: {
                                start: 354,
                                end: 374,
                              },
                            },
                            loc: {
                              start: 349,
                              end: 374,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'directCities',
                              loc: {
                                start: 381,
                                end: 393,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'id',
                                    loc: {
                                      start: 404,
                                      end: 406,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 404,
                                    end: 406,
                                  },
                                },
                              ],
                              loc: {
                                start: 394,
                                end: 414,
                              },
                            },
                            loc: {
                              start: 381,
                              end: 414,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'transitCities',
                              loc: {
                                start: 421,
                                end: 434,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'id',
                                    loc: {
                                      start: 445,
                                      end: 447,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 445,
                                    end: 447,
                                  },
                                },
                              ],
                              loc: {
                                start: 435,
                                end: 455,
                              },
                            },
                            loc: {
                              start: 421,
                              end: 455,
                            },
                          },
                        ],
                        loc: {
                          start: 341,
                          end: 461,
                        },
                      },
                      loc: {
                        start: 321,
                        end: 461,
                      },
                    },
                  ],
                  loc: {
                    start: 237,
                    end: 465,
                  },
                },
                loc: {
                  start: 223,
                  end: 465,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'warnings',
                  loc: {
                    start: 468,
                    end: 476,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'code',
                        loc: {
                          start: 483,
                          end: 487,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 483,
                        end: 487,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'data',
                        loc: {
                          start: 492,
                          end: 496,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'InlineFragment',
                            typeCondition: {
                              kind: 'NamedType',
                              name: {
                                kind: 'Name',
                                value: 'SrmForgottenActivation',
                                loc: {
                                  start: 512,
                                  end: 534,
                                },
                              },
                              loc: {
                                start: 512,
                                end: 534,
                              },
                            },
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'potentialActivationDate',
                                    loc: {
                                      start: 545,
                                      end: 568,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 545,
                                    end: 568,
                                  },
                                },
                              ],
                              loc: {
                                start: 535,
                                end: 576,
                              },
                            },
                            loc: {
                              start: 505,
                              end: 576,
                            },
                          },
                        ],
                        loc: {
                          start: 497,
                          end: 582,
                        },
                      },
                      loc: {
                        start: 492,
                        end: 582,
                      },
                    },
                  ],
                  loc: {
                    start: 477,
                    end: 586,
                  },
                },
                loc: {
                  start: 468,
                  end: 586,
                },
              },
            ],
            loc: {
              start: 35,
              end: 588,
            },
          },
          loc: {
            start: 0,
            end: 588,
          },
        },
      ],
    },
    rawSDL:
      'fragment priceList on SrmPriceList {\n  id\n  name\n  type\n  createdAt\n  createdBy {\n    firstName\n    lastName\n  }\n  startDate\n  endDate\n  activationDate\n  isFutureDateActivation\n  status\n  productCategories {\n    name\n  }\n  priceListsGeo {\n    deliverySchemaCode\n    cities {\n      id\n    }\n    nodes {\n      id\n    }\n    distributionCenters {\n      city {\n        id\n      }\n      directCities {\n        id\n      }\n      transitCities {\n        id\n      }\n    }\n  }\n  warnings {\n    code\n    data {\n      ... on SrmForgottenActivation {\n        potentialActivationDate\n      }\n    }\n  }\n}',
    hash: 'e7b047a33736b7b3d4920492d95ec8dd70ecec74d309d835dffbaac7e5dbd01b',
  },
  {
    rawSDL:
      '\n  fragment getPriceList on SrmPriceList {\n    createdAt\n    endDate\n    id\n    name\n    startDate\n    status\n    type\n    isFutureDateActivation\n    productCategories {\n      name\n    }\n    warnings {\n      code\n      data {\n        ... on SrmForgottenActivation {\n          potentialActivationDate\n        }\n      }\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getPriceList',
            loc: {
              start: 12,
              end: 24,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmPriceList',
              loc: {
                start: 28,
                end: 40,
              },
            },
            loc: {
              start: 28,
              end: 40,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'createdAt',
                  loc: {
                    start: 47,
                    end: 56,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 47,
                  end: 56,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'endDate',
                  loc: {
                    start: 61,
                    end: 68,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 61,
                  end: 68,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 73,
                    end: 75,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 73,
                  end: 75,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 80,
                    end: 84,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 80,
                  end: 84,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'startDate',
                  loc: {
                    start: 89,
                    end: 98,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 89,
                  end: 98,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'status',
                  loc: {
                    start: 103,
                    end: 109,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 103,
                  end: 109,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'type',
                  loc: {
                    start: 114,
                    end: 118,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 114,
                  end: 118,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'isFutureDateActivation',
                  loc: {
                    start: 123,
                    end: 145,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 123,
                  end: 145,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'productCategories',
                  loc: {
                    start: 150,
                    end: 167,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 176,
                          end: 180,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 176,
                        end: 180,
                      },
                    },
                  ],
                  loc: {
                    start: 168,
                    end: 186,
                  },
                },
                loc: {
                  start: 150,
                  end: 186,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'warnings',
                  loc: {
                    start: 191,
                    end: 199,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'code',
                        loc: {
                          start: 208,
                          end: 212,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 208,
                        end: 212,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'data',
                        loc: {
                          start: 219,
                          end: 223,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'InlineFragment',
                            typeCondition: {
                              kind: 'NamedType',
                              name: {
                                kind: 'Name',
                                value: 'SrmForgottenActivation',
                                loc: {
                                  start: 241,
                                  end: 263,
                                },
                              },
                              loc: {
                                start: 241,
                                end: 263,
                              },
                            },
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'potentialActivationDate',
                                    loc: {
                                      start: 276,
                                      end: 299,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 276,
                                    end: 299,
                                  },
                                },
                              ],
                              loc: {
                                start: 264,
                                end: 309,
                              },
                            },
                            loc: {
                              start: 234,
                              end: 309,
                            },
                          },
                        ],
                        loc: {
                          start: 224,
                          end: 317,
                        },
                      },
                      loc: {
                        start: 219,
                        end: 317,
                      },
                    },
                  ],
                  loc: {
                    start: 200,
                    end: 323,
                  },
                },
                loc: {
                  start: 191,
                  end: 323,
                },
              },
            ],
            loc: {
              start: 41,
              end: 327,
            },
          },
          loc: {
            start: 3,
            end: 327,
          },
        },
      ],
    },
    location: '',
    hash: '072f0b73446c0af125656e92f9addcd0bca6806fcecb31501c2641fe03ba0558',
  },
  {
    rawSDL:
      '\n  query getPriceList($contractId: UUID!, $priceListsId: [UUID!]) {\n    priceLists: srmPriceLists(contractId: $contractId, id: $priceListsId) {\n      edges {\n        node {\n          ...getPriceList\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getPriceList',
            loc: {
              start: 9,
              end: 21,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'contractId',
                  loc: {
                    start: 23,
                    end: 33,
                  },
                },
                loc: {
                  start: 22,
                  end: 33,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 35,
                      end: 39,
                    },
                  },
                  loc: {
                    start: 35,
                    end: 39,
                  },
                },
                loc: {
                  start: 35,
                  end: 40,
                },
              },
              directives: [],
              loc: {
                start: 22,
                end: 40,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'priceListsId',
                  loc: {
                    start: 43,
                    end: 55,
                  },
                },
                loc: {
                  start: 42,
                  end: 55,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 58,
                        end: 62,
                      },
                    },
                    loc: {
                      start: 58,
                      end: 62,
                    },
                  },
                  loc: {
                    start: 58,
                    end: 63,
                  },
                },
                loc: {
                  start: 57,
                  end: 64,
                },
              },
              directives: [],
              loc: {
                start: 42,
                end: 64,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                alias: {
                  kind: 'Name',
                  value: 'priceLists',
                  loc: {
                    start: 72,
                    end: 82,
                  },
                },
                name: {
                  kind: 'Name',
                  value: 'srmPriceLists',
                  loc: {
                    start: 84,
                    end: 97,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'contractId',
                      loc: {
                        start: 98,
                        end: 108,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'contractId',
                        loc: {
                          start: 111,
                          end: 121,
                        },
                      },
                      loc: {
                        start: 110,
                        end: 121,
                      },
                    },
                    loc: {
                      start: 98,
                      end: 121,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 123,
                        end: 125,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'priceListsId',
                        loc: {
                          start: 128,
                          end: 140,
                        },
                      },
                      loc: {
                        start: 127,
                        end: 140,
                      },
                    },
                    loc: {
                      start: 123,
                      end: 140,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 150,
                          end: 155,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 166,
                                end: 170,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getPriceList',
                                    loc: {
                                      start: 186,
                                      end: 198,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 183,
                                    end: 198,
                                  },
                                },
                              ],
                              loc: {
                                start: 171,
                                end: 208,
                              },
                            },
                            loc: {
                              start: 166,
                              end: 208,
                            },
                          },
                        ],
                        loc: {
                          start: 156,
                          end: 216,
                        },
                      },
                      loc: {
                        start: 150,
                        end: 216,
                      },
                    },
                  ],
                  loc: {
                    start: 142,
                    end: 222,
                  },
                },
                loc: {
                  start: 72,
                  end: 222,
                },
              },
            ],
            loc: {
              start: 66,
              end: 226,
            },
          },
          loc: {
            start: 3,
            end: 226,
          },
        },
      ],
    },
    location: '',
    hash: '6596518afc76329ed8e87aba7a29b6ffdeed2a06162ba8f7f2e077e7fa5e6eab',
  },
  {
    rawSDL:
      '\n  fragment priceListsGeoChanges on SrmPriceListsGeoChange {\n    id\n    createdAt\n    createdBy {\n      firstName\n      lastName\n    }\n    geoEntity {\n      ... on SrmCity {\n        id\n        name\n      }\n      ... on SrmDcCityRoute {\n        id\n        dcCity {\n          name\n        }\n        isTransit\n        targetCity {\n          name\n        }\n      }\n      ... on SrmNode {\n        id\n        name\n      }\n    }\n    priceListsGeoChangeType\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'priceListsGeoChanges',
            loc: {
              start: 12,
              end: 32,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmPriceListsGeoChange',
              loc: {
                start: 36,
                end: 58,
              },
            },
            loc: {
              start: 36,
              end: 58,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 65,
                    end: 67,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 65,
                  end: 67,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'createdAt',
                  loc: {
                    start: 72,
                    end: 81,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 72,
                  end: 81,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'createdBy',
                  loc: {
                    start: 86,
                    end: 95,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'firstName',
                        loc: {
                          start: 104,
                          end: 113,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 104,
                        end: 113,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'lastName',
                        loc: {
                          start: 120,
                          end: 128,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 120,
                        end: 128,
                      },
                    },
                  ],
                  loc: {
                    start: 96,
                    end: 134,
                  },
                },
                loc: {
                  start: 86,
                  end: 134,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'geoEntity',
                  loc: {
                    start: 139,
                    end: 148,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'InlineFragment',
                      typeCondition: {
                        kind: 'NamedType',
                        name: {
                          kind: 'Name',
                          value: 'SrmCity',
                          loc: {
                            start: 164,
                            end: 171,
                          },
                        },
                        loc: {
                          start: 164,
                          end: 171,
                        },
                      },
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'id',
                              loc: {
                                start: 182,
                                end: 184,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 182,
                              end: 184,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 193,
                                end: 197,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 193,
                              end: 197,
                            },
                          },
                        ],
                        loc: {
                          start: 172,
                          end: 205,
                        },
                      },
                      loc: {
                        start: 157,
                        end: 205,
                      },
                    },
                    {
                      kind: 'InlineFragment',
                      typeCondition: {
                        kind: 'NamedType',
                        name: {
                          kind: 'Name',
                          value: 'SrmDcCityRoute',
                          loc: {
                            start: 219,
                            end: 233,
                          },
                        },
                        loc: {
                          start: 219,
                          end: 233,
                        },
                      },
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'id',
                              loc: {
                                start: 244,
                                end: 246,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 244,
                              end: 246,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'dcCity',
                              loc: {
                                start: 255,
                                end: 261,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'name',
                                    loc: {
                                      start: 274,
                                      end: 278,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 274,
                                    end: 278,
                                  },
                                },
                              ],
                              loc: {
                                start: 262,
                                end: 288,
                              },
                            },
                            loc: {
                              start: 255,
                              end: 288,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'isTransit',
                              loc: {
                                start: 297,
                                end: 306,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 297,
                              end: 306,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'targetCity',
                              loc: {
                                start: 315,
                                end: 325,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'name',
                                    loc: {
                                      start: 338,
                                      end: 342,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 338,
                                    end: 342,
                                  },
                                },
                              ],
                              loc: {
                                start: 326,
                                end: 352,
                              },
                            },
                            loc: {
                              start: 315,
                              end: 352,
                            },
                          },
                        ],
                        loc: {
                          start: 234,
                          end: 360,
                        },
                      },
                      loc: {
                        start: 212,
                        end: 360,
                      },
                    },
                    {
                      kind: 'InlineFragment',
                      typeCondition: {
                        kind: 'NamedType',
                        name: {
                          kind: 'Name',
                          value: 'SrmNode',
                          loc: {
                            start: 374,
                            end: 381,
                          },
                        },
                        loc: {
                          start: 374,
                          end: 381,
                        },
                      },
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'id',
                              loc: {
                                start: 392,
                                end: 394,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 392,
                              end: 394,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 403,
                                end: 407,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 403,
                              end: 407,
                            },
                          },
                        ],
                        loc: {
                          start: 382,
                          end: 415,
                        },
                      },
                      loc: {
                        start: 367,
                        end: 415,
                      },
                    },
                  ],
                  loc: {
                    start: 149,
                    end: 421,
                  },
                },
                loc: {
                  start: 139,
                  end: 421,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'priceListsGeoChangeType',
                  loc: {
                    start: 426,
                    end: 449,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 426,
                  end: 449,
                },
              },
            ],
            loc: {
              start: 59,
              end: 453,
            },
          },
          loc: {
            start: 3,
            end: 453,
          },
        },
      ],
    },
    location: '',
    hash: 'a829e363abfefcf1f944a2cb04166cc4835a3b1435ec56e2857960e06fe20550',
  },
  {
    rawSDL:
      '\n  query getPriceListsGeoChanges($priceListId: UUID!, $first: Int, $last: Int, $after: String, $before: String) {\n    srmPriceListsGeoChanges(priceListId: $priceListId, first: $first, last: $last, after: $after, before: $before) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...priceListsGeoChanges\n        }\n      }\n    }\n  }\n\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getPriceListsGeoChanges',
            loc: {
              start: 9,
              end: 32,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'priceListId',
                  loc: {
                    start: 34,
                    end: 45,
                  },
                },
                loc: {
                  start: 33,
                  end: 45,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 47,
                      end: 51,
                    },
                  },
                  loc: {
                    start: 47,
                    end: 51,
                  },
                },
                loc: {
                  start: 47,
                  end: 52,
                },
              },
              directives: [],
              loc: {
                start: 33,
                end: 52,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 55,
                    end: 60,
                  },
                },
                loc: {
                  start: 54,
                  end: 60,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 62,
                    end: 65,
                  },
                },
                loc: {
                  start: 62,
                  end: 65,
                },
              },
              directives: [],
              loc: {
                start: 54,
                end: 65,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'last',
                  loc: {
                    start: 68,
                    end: 72,
                  },
                },
                loc: {
                  start: 67,
                  end: 72,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 74,
                    end: 77,
                  },
                },
                loc: {
                  start: 74,
                  end: 77,
                },
              },
              directives: [],
              loc: {
                start: 67,
                end: 77,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 80,
                    end: 85,
                  },
                },
                loc: {
                  start: 79,
                  end: 85,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 87,
                    end: 93,
                  },
                },
                loc: {
                  start: 87,
                  end: 93,
                },
              },
              directives: [],
              loc: {
                start: 79,
                end: 93,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'before',
                  loc: {
                    start: 96,
                    end: 102,
                  },
                },
                loc: {
                  start: 95,
                  end: 102,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 104,
                    end: 110,
                  },
                },
                loc: {
                  start: 104,
                  end: 110,
                },
              },
              directives: [],
              loc: {
                start: 95,
                end: 110,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmPriceListsGeoChanges',
                  loc: {
                    start: 118,
                    end: 141,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'priceListId',
                      loc: {
                        start: 142,
                        end: 153,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'priceListId',
                        loc: {
                          start: 156,
                          end: 167,
                        },
                      },
                      loc: {
                        start: 155,
                        end: 167,
                      },
                    },
                    loc: {
                      start: 142,
                      end: 167,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 169,
                        end: 174,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 177,
                          end: 182,
                        },
                      },
                      loc: {
                        start: 176,
                        end: 182,
                      },
                    },
                    loc: {
                      start: 169,
                      end: 182,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'last',
                      loc: {
                        start: 184,
                        end: 188,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'last',
                        loc: {
                          start: 191,
                          end: 195,
                        },
                      },
                      loc: {
                        start: 190,
                        end: 195,
                      },
                    },
                    loc: {
                      start: 184,
                      end: 195,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 197,
                        end: 202,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 205,
                          end: 210,
                        },
                      },
                      loc: {
                        start: 204,
                        end: 210,
                      },
                    },
                    loc: {
                      start: 197,
                      end: 210,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'before',
                      loc: {
                        start: 212,
                        end: 218,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'before',
                        loc: {
                          start: 221,
                          end: 227,
                        },
                      },
                      loc: {
                        start: 220,
                        end: 227,
                      },
                    },
                    loc: {
                      start: 212,
                      end: 227,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 237,
                          end: 245,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 256,
                                end: 267,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 256,
                              end: 267,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 276,
                                end: 285,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 276,
                              end: 285,
                            },
                          },
                        ],
                        loc: {
                          start: 246,
                          end: 293,
                        },
                      },
                      loc: {
                        start: 237,
                        end: 293,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 300,
                          end: 310,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 300,
                        end: 310,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 317,
                          end: 322,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 333,
                                end: 337,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'priceListsGeoChanges',
                                    loc: {
                                      start: 353,
                                      end: 373,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 350,
                                    end: 373,
                                  },
                                },
                              ],
                              loc: {
                                start: 338,
                                end: 383,
                              },
                            },
                            loc: {
                              start: 333,
                              end: 383,
                            },
                          },
                        ],
                        loc: {
                          start: 323,
                          end: 391,
                        },
                      },
                      loc: {
                        start: 317,
                        end: 391,
                      },
                    },
                  ],
                  loc: {
                    start: 229,
                    end: 397,
                  },
                },
                loc: {
                  start: 118,
                  end: 397,
                },
              },
            ],
            loc: {
              start: 112,
              end: 401,
            },
          },
          loc: {
            start: 3,
            end: 401,
          },
        },
      ],
    },
    location: '',
    hash: '8e6ee6e542dd8c18cd8bada6b98159713c90c85f42e6e6ed9d4f0543a379e1db',
  },
  {
    rawSDL:
      '\n  query getPriceLists(\n    $contractId: UUID!\n    $first: Int\n    $after: String\n    $sortBy: SrmSortByPriceListsInput\n    $searchQuery: String\n    $priceListTypes: [SrmPriceListType!]\n    $priceListStatuses: [SrmPriceListStatus!]\n    $deliverySchemaCodes: [SrmDeliverySchemaCode!]\n    $cities: [UUID!]\n    $productCategories: [UUID!]\n    $productIds: [UUID!]\n    $authors: [UUID!]\n    $warningCodes: [SrmWarningCode!]\n  ) {\n    srmPriceLists(\n      contractId: $contractId\n      first: $first\n      after: $after\n      sortBy: $sortBy\n      priceListTypes: $priceListTypes\n      priceListStatuses: $priceListStatuses\n      deliverySchemaCodes: $deliverySchemaCodes\n      cities: $cities\n      productCategories: $productCategories\n      searchQuery: $searchQuery\n      productIds: $productIds\n      authors: $authors\n      warningCodes: $warningCodes\n    ) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...priceList\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getPriceLists',
            loc: {
              start: 9,
              end: 22,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'contractId',
                  loc: {
                    start: 29,
                    end: 39,
                  },
                },
                loc: {
                  start: 28,
                  end: 39,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 41,
                      end: 45,
                    },
                  },
                  loc: {
                    start: 41,
                    end: 45,
                  },
                },
                loc: {
                  start: 41,
                  end: 46,
                },
              },
              directives: [],
              loc: {
                start: 28,
                end: 46,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 52,
                    end: 57,
                  },
                },
                loc: {
                  start: 51,
                  end: 57,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 59,
                    end: 62,
                  },
                },
                loc: {
                  start: 59,
                  end: 62,
                },
              },
              directives: [],
              loc: {
                start: 51,
                end: 62,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 68,
                    end: 73,
                  },
                },
                loc: {
                  start: 67,
                  end: 73,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 75,
                    end: 81,
                  },
                },
                loc: {
                  start: 75,
                  end: 81,
                },
              },
              directives: [],
              loc: {
                start: 67,
                end: 81,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'sortBy',
                  loc: {
                    start: 87,
                    end: 93,
                  },
                },
                loc: {
                  start: 86,
                  end: 93,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'SrmSortByPriceListsInput',
                  loc: {
                    start: 95,
                    end: 119,
                  },
                },
                loc: {
                  start: 95,
                  end: 119,
                },
              },
              directives: [],
              loc: {
                start: 86,
                end: 119,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'searchQuery',
                  loc: {
                    start: 125,
                    end: 136,
                  },
                },
                loc: {
                  start: 124,
                  end: 136,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 138,
                    end: 144,
                  },
                },
                loc: {
                  start: 138,
                  end: 144,
                },
              },
              directives: [],
              loc: {
                start: 124,
                end: 144,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'priceListTypes',
                  loc: {
                    start: 150,
                    end: 164,
                  },
                },
                loc: {
                  start: 149,
                  end: 164,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'SrmPriceListType',
                      loc: {
                        start: 167,
                        end: 183,
                      },
                    },
                    loc: {
                      start: 167,
                      end: 183,
                    },
                  },
                  loc: {
                    start: 167,
                    end: 184,
                  },
                },
                loc: {
                  start: 166,
                  end: 185,
                },
              },
              directives: [],
              loc: {
                start: 149,
                end: 185,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'priceListStatuses',
                  loc: {
                    start: 191,
                    end: 208,
                  },
                },
                loc: {
                  start: 190,
                  end: 208,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'SrmPriceListStatus',
                      loc: {
                        start: 211,
                        end: 229,
                      },
                    },
                    loc: {
                      start: 211,
                      end: 229,
                    },
                  },
                  loc: {
                    start: 211,
                    end: 230,
                  },
                },
                loc: {
                  start: 210,
                  end: 231,
                },
              },
              directives: [],
              loc: {
                start: 190,
                end: 231,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'deliverySchemaCodes',
                  loc: {
                    start: 237,
                    end: 256,
                  },
                },
                loc: {
                  start: 236,
                  end: 256,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'SrmDeliverySchemaCode',
                      loc: {
                        start: 259,
                        end: 280,
                      },
                    },
                    loc: {
                      start: 259,
                      end: 280,
                    },
                  },
                  loc: {
                    start: 259,
                    end: 281,
                  },
                },
                loc: {
                  start: 258,
                  end: 282,
                },
              },
              directives: [],
              loc: {
                start: 236,
                end: 282,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'cities',
                  loc: {
                    start: 288,
                    end: 294,
                  },
                },
                loc: {
                  start: 287,
                  end: 294,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 297,
                        end: 301,
                      },
                    },
                    loc: {
                      start: 297,
                      end: 301,
                    },
                  },
                  loc: {
                    start: 297,
                    end: 302,
                  },
                },
                loc: {
                  start: 296,
                  end: 303,
                },
              },
              directives: [],
              loc: {
                start: 287,
                end: 303,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'productCategories',
                  loc: {
                    start: 309,
                    end: 326,
                  },
                },
                loc: {
                  start: 308,
                  end: 326,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 329,
                        end: 333,
                      },
                    },
                    loc: {
                      start: 329,
                      end: 333,
                    },
                  },
                  loc: {
                    start: 329,
                    end: 334,
                  },
                },
                loc: {
                  start: 328,
                  end: 335,
                },
              },
              directives: [],
              loc: {
                start: 308,
                end: 335,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'productIds',
                  loc: {
                    start: 341,
                    end: 351,
                  },
                },
                loc: {
                  start: 340,
                  end: 351,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 354,
                        end: 358,
                      },
                    },
                    loc: {
                      start: 354,
                      end: 358,
                    },
                  },
                  loc: {
                    start: 354,
                    end: 359,
                  },
                },
                loc: {
                  start: 353,
                  end: 360,
                },
              },
              directives: [],
              loc: {
                start: 340,
                end: 360,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'authors',
                  loc: {
                    start: 366,
                    end: 373,
                  },
                },
                loc: {
                  start: 365,
                  end: 373,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 376,
                        end: 380,
                      },
                    },
                    loc: {
                      start: 376,
                      end: 380,
                    },
                  },
                  loc: {
                    start: 376,
                    end: 381,
                  },
                },
                loc: {
                  start: 375,
                  end: 382,
                },
              },
              directives: [],
              loc: {
                start: 365,
                end: 382,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'warningCodes',
                  loc: {
                    start: 388,
                    end: 400,
                  },
                },
                loc: {
                  start: 387,
                  end: 400,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'SrmWarningCode',
                      loc: {
                        start: 403,
                        end: 417,
                      },
                    },
                    loc: {
                      start: 403,
                      end: 417,
                    },
                  },
                  loc: {
                    start: 403,
                    end: 418,
                  },
                },
                loc: {
                  start: 402,
                  end: 419,
                },
              },
              directives: [],
              loc: {
                start: 387,
                end: 419,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmPriceLists',
                  loc: {
                    start: 430,
                    end: 443,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'contractId',
                      loc: {
                        start: 451,
                        end: 461,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'contractId',
                        loc: {
                          start: 464,
                          end: 474,
                        },
                      },
                      loc: {
                        start: 463,
                        end: 474,
                      },
                    },
                    loc: {
                      start: 451,
                      end: 474,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 481,
                        end: 486,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 489,
                          end: 494,
                        },
                      },
                      loc: {
                        start: 488,
                        end: 494,
                      },
                    },
                    loc: {
                      start: 481,
                      end: 494,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 501,
                        end: 506,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 509,
                          end: 514,
                        },
                      },
                      loc: {
                        start: 508,
                        end: 514,
                      },
                    },
                    loc: {
                      start: 501,
                      end: 514,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'sortBy',
                      loc: {
                        start: 521,
                        end: 527,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'sortBy',
                        loc: {
                          start: 530,
                          end: 536,
                        },
                      },
                      loc: {
                        start: 529,
                        end: 536,
                      },
                    },
                    loc: {
                      start: 521,
                      end: 536,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'priceListTypes',
                      loc: {
                        start: 543,
                        end: 557,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'priceListTypes',
                        loc: {
                          start: 560,
                          end: 574,
                        },
                      },
                      loc: {
                        start: 559,
                        end: 574,
                      },
                    },
                    loc: {
                      start: 543,
                      end: 574,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'priceListStatuses',
                      loc: {
                        start: 581,
                        end: 598,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'priceListStatuses',
                        loc: {
                          start: 601,
                          end: 618,
                        },
                      },
                      loc: {
                        start: 600,
                        end: 618,
                      },
                    },
                    loc: {
                      start: 581,
                      end: 618,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'deliverySchemaCodes',
                      loc: {
                        start: 625,
                        end: 644,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'deliverySchemaCodes',
                        loc: {
                          start: 647,
                          end: 666,
                        },
                      },
                      loc: {
                        start: 646,
                        end: 666,
                      },
                    },
                    loc: {
                      start: 625,
                      end: 666,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'cities',
                      loc: {
                        start: 673,
                        end: 679,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'cities',
                        loc: {
                          start: 682,
                          end: 688,
                        },
                      },
                      loc: {
                        start: 681,
                        end: 688,
                      },
                    },
                    loc: {
                      start: 673,
                      end: 688,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'productCategories',
                      loc: {
                        start: 695,
                        end: 712,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'productCategories',
                        loc: {
                          start: 715,
                          end: 732,
                        },
                      },
                      loc: {
                        start: 714,
                        end: 732,
                      },
                    },
                    loc: {
                      start: 695,
                      end: 732,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 739,
                        end: 750,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'searchQuery',
                        loc: {
                          start: 753,
                          end: 764,
                        },
                      },
                      loc: {
                        start: 752,
                        end: 764,
                      },
                    },
                    loc: {
                      start: 739,
                      end: 764,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'productIds',
                      loc: {
                        start: 771,
                        end: 781,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'productIds',
                        loc: {
                          start: 784,
                          end: 794,
                        },
                      },
                      loc: {
                        start: 783,
                        end: 794,
                      },
                    },
                    loc: {
                      start: 771,
                      end: 794,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'authors',
                      loc: {
                        start: 801,
                        end: 808,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'authors',
                        loc: {
                          start: 811,
                          end: 818,
                        },
                      },
                      loc: {
                        start: 810,
                        end: 818,
                      },
                    },
                    loc: {
                      start: 801,
                      end: 818,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'warningCodes',
                      loc: {
                        start: 825,
                        end: 837,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'warningCodes',
                        loc: {
                          start: 840,
                          end: 852,
                        },
                      },
                      loc: {
                        start: 839,
                        end: 852,
                      },
                    },
                    loc: {
                      start: 825,
                      end: 852,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 867,
                          end: 875,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 886,
                                end: 897,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 886,
                              end: 897,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 906,
                                end: 915,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 906,
                              end: 915,
                            },
                          },
                        ],
                        loc: {
                          start: 876,
                          end: 923,
                        },
                      },
                      loc: {
                        start: 867,
                        end: 923,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 930,
                          end: 940,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 930,
                        end: 940,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 947,
                          end: 952,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 963,
                                end: 967,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'priceList',
                                    loc: {
                                      start: 983,
                                      end: 992,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 980,
                                    end: 992,
                                  },
                                },
                              ],
                              loc: {
                                start: 968,
                                end: 1002,
                              },
                            },
                            loc: {
                              start: 963,
                              end: 1002,
                            },
                          },
                        ],
                        loc: {
                          start: 953,
                          end: 1010,
                        },
                      },
                      loc: {
                        start: 947,
                        end: 1010,
                      },
                    },
                  ],
                  loc: {
                    start: 859,
                    end: 1016,
                  },
                },
                loc: {
                  start: 430,
                  end: 1016,
                },
              },
            ],
            loc: {
              start: 424,
              end: 1020,
            },
          },
          loc: {
            start: 3,
            end: 1020,
          },
        },
      ],
    },
    location: '',
    hash: '1d038989f92b6c5ed9dd42267a3e4b5c476ad754dfb9470442ee1395ca787071',
  },
  {
    rawSDL:
      '\n  mutation multipleUpdatePriceListsGeo($priceListsGeoParams: SrmMultipleUpdatePriceListsGeoInput!) {\n    srmMultipleUpdatePriceListsGeo(priceListsGeoParams: $priceListsGeoParams) {\n      id\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'mutation',
          name: {
            kind: 'Name',
            value: 'multipleUpdatePriceListsGeo',
            loc: {
              start: 12,
              end: 39,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'priceListsGeoParams',
                  loc: {
                    start: 41,
                    end: 60,
                  },
                },
                loc: {
                  start: 40,
                  end: 60,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'SrmMultipleUpdatePriceListsGeoInput',
                    loc: {
                      start: 62,
                      end: 97,
                    },
                  },
                  loc: {
                    start: 62,
                    end: 97,
                  },
                },
                loc: {
                  start: 62,
                  end: 98,
                },
              },
              directives: [],
              loc: {
                start: 40,
                end: 98,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmMultipleUpdatePriceListsGeo',
                  loc: {
                    start: 106,
                    end: 136,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'priceListsGeoParams',
                      loc: {
                        start: 137,
                        end: 156,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'priceListsGeoParams',
                        loc: {
                          start: 159,
                          end: 178,
                        },
                      },
                      loc: {
                        start: 158,
                        end: 178,
                      },
                    },
                    loc: {
                      start: 137,
                      end: 178,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 188,
                          end: 190,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 188,
                        end: 190,
                      },
                    },
                  ],
                  loc: {
                    start: 180,
                    end: 196,
                  },
                },
                loc: {
                  start: 106,
                  end: 196,
                },
              },
            ],
            loc: {
              start: 100,
              end: 200,
            },
          },
          loc: {
            start: 3,
            end: 200,
          },
        },
      ],
    },
    location: '',
    hash: '4fce4988eeffc41ab762c900bf154fd71b08cc7fe927c00ecdc8d8cf197e1948',
  },
  {
    rawSDL:
      '\n  mutation updatePriceList($updatePriceListId: UUID!, $priceListParams: SrmUpdatePriceListInput!) {\n    srmUpdatePriceList(id: $updatePriceListId, priceListParams: $priceListParams) {\n      ...priceList\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'mutation',
          name: {
            kind: 'Name',
            value: 'updatePriceList',
            loc: {
              start: 12,
              end: 27,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'updatePriceListId',
                  loc: {
                    start: 29,
                    end: 46,
                  },
                },
                loc: {
                  start: 28,
                  end: 46,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 48,
                      end: 52,
                    },
                  },
                  loc: {
                    start: 48,
                    end: 52,
                  },
                },
                loc: {
                  start: 48,
                  end: 53,
                },
              },
              directives: [],
              loc: {
                start: 28,
                end: 53,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'priceListParams',
                  loc: {
                    start: 56,
                    end: 71,
                  },
                },
                loc: {
                  start: 55,
                  end: 71,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'SrmUpdatePriceListInput',
                    loc: {
                      start: 73,
                      end: 96,
                    },
                  },
                  loc: {
                    start: 73,
                    end: 96,
                  },
                },
                loc: {
                  start: 73,
                  end: 97,
                },
              },
              directives: [],
              loc: {
                start: 55,
                end: 97,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmUpdatePriceList',
                  loc: {
                    start: 105,
                    end: 123,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 124,
                        end: 126,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'updatePriceListId',
                        loc: {
                          start: 129,
                          end: 146,
                        },
                      },
                      loc: {
                        start: 128,
                        end: 146,
                      },
                    },
                    loc: {
                      start: 124,
                      end: 146,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'priceListParams',
                      loc: {
                        start: 148,
                        end: 163,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'priceListParams',
                        loc: {
                          start: 166,
                          end: 181,
                        },
                      },
                      loc: {
                        start: 165,
                        end: 181,
                      },
                    },
                    loc: {
                      start: 148,
                      end: 181,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'FragmentSpread',
                      name: {
                        kind: 'Name',
                        value: 'priceList',
                        loc: {
                          start: 194,
                          end: 203,
                        },
                      },
                      directives: [],
                      loc: {
                        start: 191,
                        end: 203,
                      },
                    },
                  ],
                  loc: {
                    start: 183,
                    end: 209,
                  },
                },
                loc: {
                  start: 105,
                  end: 209,
                },
              },
            ],
            loc: {
              start: 99,
              end: 213,
            },
          },
          loc: {
            start: 3,
            end: 213,
          },
        },
      ],
    },
    location: '',
    hash: '1cba1e448888dbeeb4f6c605bff4bb7280376b247840a383d3c4134d7b39cc02',
  },
  {
    rawSDL:
      '\n  fragment priceListPosition on SrmPriceListPosition {\n    id\n    price\n    product {\n      name\n      guid\n      manufacturer {\n        name\n      }\n    }\n    priceHistory {\n      createdAt\n      createdBy {\n        firstName\n        lastName\n      }\n      value\n    }\n    deletedAt\n    deletedBy {\n      firstName\n      lastName\n    }\n    warnings {\n      code\n      data {\n        ... on SrmMissingRegularPriceData {\n          cities {\n            name\n          }\n        }\n      }\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'priceListPosition',
            loc: {
              start: 12,
              end: 29,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmPriceListPosition',
              loc: {
                start: 33,
                end: 53,
              },
            },
            loc: {
              start: 33,
              end: 53,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 60,
                    end: 62,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 60,
                  end: 62,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'price',
                  loc: {
                    start: 67,
                    end: 72,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 67,
                  end: 72,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'product',
                  loc: {
                    start: 77,
                    end: 84,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 93,
                          end: 97,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 93,
                        end: 97,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'guid',
                        loc: {
                          start: 104,
                          end: 108,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 104,
                        end: 108,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'manufacturer',
                        loc: {
                          start: 115,
                          end: 127,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 138,
                                end: 142,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 138,
                              end: 142,
                            },
                          },
                        ],
                        loc: {
                          start: 128,
                          end: 150,
                        },
                      },
                      loc: {
                        start: 115,
                        end: 150,
                      },
                    },
                  ],
                  loc: {
                    start: 85,
                    end: 156,
                  },
                },
                loc: {
                  start: 77,
                  end: 156,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'priceHistory',
                  loc: {
                    start: 161,
                    end: 173,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'createdAt',
                        loc: {
                          start: 182,
                          end: 191,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 182,
                        end: 191,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'createdBy',
                        loc: {
                          start: 198,
                          end: 207,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'firstName',
                              loc: {
                                start: 218,
                                end: 227,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 218,
                              end: 227,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'lastName',
                              loc: {
                                start: 236,
                                end: 244,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 236,
                              end: 244,
                            },
                          },
                        ],
                        loc: {
                          start: 208,
                          end: 252,
                        },
                      },
                      loc: {
                        start: 198,
                        end: 252,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'value',
                        loc: {
                          start: 259,
                          end: 264,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 259,
                        end: 264,
                      },
                    },
                  ],
                  loc: {
                    start: 174,
                    end: 270,
                  },
                },
                loc: {
                  start: 161,
                  end: 270,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'deletedAt',
                  loc: {
                    start: 275,
                    end: 284,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 275,
                  end: 284,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'deletedBy',
                  loc: {
                    start: 289,
                    end: 298,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'firstName',
                        loc: {
                          start: 307,
                          end: 316,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 307,
                        end: 316,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'lastName',
                        loc: {
                          start: 323,
                          end: 331,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 323,
                        end: 331,
                      },
                    },
                  ],
                  loc: {
                    start: 299,
                    end: 337,
                  },
                },
                loc: {
                  start: 289,
                  end: 337,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'warnings',
                  loc: {
                    start: 342,
                    end: 350,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'code',
                        loc: {
                          start: 359,
                          end: 363,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 359,
                        end: 363,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'data',
                        loc: {
                          start: 370,
                          end: 374,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'InlineFragment',
                            typeCondition: {
                              kind: 'NamedType',
                              name: {
                                kind: 'Name',
                                value: 'SrmMissingRegularPriceData',
                                loc: {
                                  start: 392,
                                  end: 418,
                                },
                              },
                              loc: {
                                start: 392,
                                end: 418,
                              },
                            },
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'cities',
                                    loc: {
                                      start: 431,
                                      end: 437,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  selectionSet: {
                                    kind: 'SelectionSet',
                                    selections: [
                                      {
                                        kind: 'Field',
                                        name: {
                                          kind: 'Name',
                                          value: 'name',
                                          loc: {
                                            start: 452,
                                            end: 456,
                                          },
                                        },
                                        arguments: [],
                                        directives: [],
                                        loc: {
                                          start: 452,
                                          end: 456,
                                        },
                                      },
                                    ],
                                    loc: {
                                      start: 438,
                                      end: 468,
                                    },
                                  },
                                  loc: {
                                    start: 431,
                                    end: 468,
                                  },
                                },
                              ],
                              loc: {
                                start: 419,
                                end: 478,
                              },
                            },
                            loc: {
                              start: 385,
                              end: 478,
                            },
                          },
                        ],
                        loc: {
                          start: 375,
                          end: 486,
                        },
                      },
                      loc: {
                        start: 370,
                        end: 486,
                      },
                    },
                  ],
                  loc: {
                    start: 351,
                    end: 492,
                  },
                },
                loc: {
                  start: 342,
                  end: 492,
                },
              },
            ],
            loc: {
              start: 54,
              end: 496,
            },
          },
          loc: {
            start: 3,
            end: 496,
          },
        },
      ],
    },
    location: '',
    hash: '1bafd54b9ada0a88178a1c3d71e900c28af4a4d7020cee9197598c022528056e',
  },
  {
    rawSDL:
      '\n  query getPriceListPositions($after: String, $first: Int, $priceListId: UUID!, $searchQuery: String) {\n    priceListPositions: srmPriceListPositions(\n      after: $after\n      first: $first\n      priceListId: $priceListId\n      searchQuery: $searchQuery\n    ) {\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n      totalCount\n      edges {\n        node {\n          ...priceListPosition\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getPriceListPositions',
            loc: {
              start: 9,
              end: 30,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 32,
                    end: 37,
                  },
                },
                loc: {
                  start: 31,
                  end: 37,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 39,
                    end: 45,
                  },
                },
                loc: {
                  start: 39,
                  end: 45,
                },
              },
              directives: [],
              loc: {
                start: 31,
                end: 45,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 48,
                    end: 53,
                  },
                },
                loc: {
                  start: 47,
                  end: 53,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 55,
                    end: 58,
                  },
                },
                loc: {
                  start: 55,
                  end: 58,
                },
              },
              directives: [],
              loc: {
                start: 47,
                end: 58,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'priceListId',
                  loc: {
                    start: 61,
                    end: 72,
                  },
                },
                loc: {
                  start: 60,
                  end: 72,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 74,
                      end: 78,
                    },
                  },
                  loc: {
                    start: 74,
                    end: 78,
                  },
                },
                loc: {
                  start: 74,
                  end: 79,
                },
              },
              directives: [],
              loc: {
                start: 60,
                end: 79,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'searchQuery',
                  loc: {
                    start: 82,
                    end: 93,
                  },
                },
                loc: {
                  start: 81,
                  end: 93,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 95,
                    end: 101,
                  },
                },
                loc: {
                  start: 95,
                  end: 101,
                },
              },
              directives: [],
              loc: {
                start: 81,
                end: 101,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                alias: {
                  kind: 'Name',
                  value: 'priceListPositions',
                  loc: {
                    start: 109,
                    end: 127,
                  },
                },
                name: {
                  kind: 'Name',
                  value: 'srmPriceListPositions',
                  loc: {
                    start: 129,
                    end: 150,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 158,
                        end: 163,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 166,
                          end: 171,
                        },
                      },
                      loc: {
                        start: 165,
                        end: 171,
                      },
                    },
                    loc: {
                      start: 158,
                      end: 171,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 178,
                        end: 183,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 186,
                          end: 191,
                        },
                      },
                      loc: {
                        start: 185,
                        end: 191,
                      },
                    },
                    loc: {
                      start: 178,
                      end: 191,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'priceListId',
                      loc: {
                        start: 198,
                        end: 209,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'priceListId',
                        loc: {
                          start: 212,
                          end: 223,
                        },
                      },
                      loc: {
                        start: 211,
                        end: 223,
                      },
                    },
                    loc: {
                      start: 198,
                      end: 223,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 230,
                        end: 241,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'searchQuery',
                        loc: {
                          start: 244,
                          end: 255,
                        },
                      },
                      loc: {
                        start: 243,
                        end: 255,
                      },
                    },
                    loc: {
                      start: 230,
                      end: 255,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 270,
                          end: 278,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 289,
                                end: 298,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 289,
                              end: 298,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 307,
                                end: 318,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 307,
                              end: 318,
                            },
                          },
                        ],
                        loc: {
                          start: 279,
                          end: 326,
                        },
                      },
                      loc: {
                        start: 270,
                        end: 326,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 333,
                          end: 343,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 333,
                        end: 343,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 350,
                          end: 355,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 366,
                                end: 370,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'priceListPosition',
                                    loc: {
                                      start: 386,
                                      end: 403,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 383,
                                    end: 403,
                                  },
                                },
                              ],
                              loc: {
                                start: 371,
                                end: 413,
                              },
                            },
                            loc: {
                              start: 366,
                              end: 413,
                            },
                          },
                        ],
                        loc: {
                          start: 356,
                          end: 421,
                        },
                      },
                      loc: {
                        start: 350,
                        end: 421,
                      },
                    },
                  ],
                  loc: {
                    start: 262,
                    end: 427,
                  },
                },
                loc: {
                  start: 109,
                  end: 427,
                },
              },
            ],
            loc: {
              start: 103,
              end: 431,
            },
          },
          loc: {
            start: 3,
            end: 431,
          },
        },
      ],
    },
    location: '',
    hash: '0d85e32d5b585b23af92fac5a124b92e524254e8f10e4676fac09294551708e1',
  },
  {
    rawSDL:
      '\n  mutation updatePriceListPosition($id: UUID!, $purchasePrice: Float!) {\n    srmUpdatePriceListPosition(id: $id, purchasePrice: $purchasePrice) {\n      ...priceListPosition\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'mutation',
          name: {
            kind: 'Name',
            value: 'updatePriceListPosition',
            loc: {
              start: 12,
              end: 35,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 37,
                    end: 39,
                  },
                },
                loc: {
                  start: 36,
                  end: 39,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 41,
                      end: 45,
                    },
                  },
                  loc: {
                    start: 41,
                    end: 45,
                  },
                },
                loc: {
                  start: 41,
                  end: 46,
                },
              },
              directives: [],
              loc: {
                start: 36,
                end: 46,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'purchasePrice',
                  loc: {
                    start: 49,
                    end: 62,
                  },
                },
                loc: {
                  start: 48,
                  end: 62,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Float',
                    loc: {
                      start: 64,
                      end: 69,
                    },
                  },
                  loc: {
                    start: 64,
                    end: 69,
                  },
                },
                loc: {
                  start: 64,
                  end: 70,
                },
              },
              directives: [],
              loc: {
                start: 48,
                end: 70,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmUpdatePriceListPosition',
                  loc: {
                    start: 78,
                    end: 104,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 105,
                        end: 107,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 110,
                          end: 112,
                        },
                      },
                      loc: {
                        start: 109,
                        end: 112,
                      },
                    },
                    loc: {
                      start: 105,
                      end: 112,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'purchasePrice',
                      loc: {
                        start: 114,
                        end: 127,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'purchasePrice',
                        loc: {
                          start: 130,
                          end: 143,
                        },
                      },
                      loc: {
                        start: 129,
                        end: 143,
                      },
                    },
                    loc: {
                      start: 114,
                      end: 143,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'FragmentSpread',
                      name: {
                        kind: 'Name',
                        value: 'priceListPosition',
                        loc: {
                          start: 156,
                          end: 173,
                        },
                      },
                      directives: [],
                      loc: {
                        start: 153,
                        end: 173,
                      },
                    },
                  ],
                  loc: {
                    start: 145,
                    end: 179,
                  },
                },
                loc: {
                  start: 78,
                  end: 179,
                },
              },
            ],
            loc: {
              start: 72,
              end: 183,
            },
          },
          loc: {
            start: 3,
            end: 183,
          },
        },
      ],
    },
    location: '',
    hash: '0ebc8711ceb1c2806e0b5ececaa47093ce1b901842bb8244eecbcecc5018855d',
  },
  {
    rawSDL:
      '\n  fragment getSupplier on SrmSupplier {\n    legalName\n    name\n    id\n    guid\n    enterpriseNumber\n    legalAddress\n    edoFrom\n    ediFrom\n    categoryManager {\n      id\n      firstName\n      lastName\n    }\n    contactPersons {\n      name\n      jobTitle\n      comments\n      id\n      email\n      phone\n    }\n    productCategories {\n      name\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getSupplier',
            loc: {
              start: 12,
              end: 23,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmSupplier',
              loc: {
                start: 27,
                end: 38,
              },
            },
            loc: {
              start: 27,
              end: 38,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'legalName',
                  loc: {
                    start: 45,
                    end: 54,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 45,
                  end: 54,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 59,
                    end: 63,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 59,
                  end: 63,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 68,
                    end: 70,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 68,
                  end: 70,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'guid',
                  loc: {
                    start: 75,
                    end: 79,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 75,
                  end: 79,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'enterpriseNumber',
                  loc: {
                    start: 84,
                    end: 100,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 84,
                  end: 100,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'legalAddress',
                  loc: {
                    start: 105,
                    end: 117,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 105,
                  end: 117,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'edoFrom',
                  loc: {
                    start: 122,
                    end: 129,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 122,
                  end: 129,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'ediFrom',
                  loc: {
                    start: 134,
                    end: 141,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 134,
                  end: 141,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'categoryManager',
                  loc: {
                    start: 146,
                    end: 161,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 170,
                          end: 172,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 170,
                        end: 172,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'firstName',
                        loc: {
                          start: 179,
                          end: 188,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 179,
                        end: 188,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'lastName',
                        loc: {
                          start: 195,
                          end: 203,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 195,
                        end: 203,
                      },
                    },
                  ],
                  loc: {
                    start: 162,
                    end: 209,
                  },
                },
                loc: {
                  start: 146,
                  end: 209,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'contactPersons',
                  loc: {
                    start: 214,
                    end: 228,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 237,
                          end: 241,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 237,
                        end: 241,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'jobTitle',
                        loc: {
                          start: 248,
                          end: 256,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 248,
                        end: 256,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'comments',
                        loc: {
                          start: 263,
                          end: 271,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 263,
                        end: 271,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 278,
                          end: 280,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 278,
                        end: 280,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'email',
                        loc: {
                          start: 287,
                          end: 292,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 287,
                        end: 292,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'phone',
                        loc: {
                          start: 299,
                          end: 304,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 299,
                        end: 304,
                      },
                    },
                  ],
                  loc: {
                    start: 229,
                    end: 310,
                  },
                },
                loc: {
                  start: 214,
                  end: 310,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'productCategories',
                  loc: {
                    start: 315,
                    end: 332,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 341,
                          end: 345,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 341,
                        end: 345,
                      },
                    },
                  ],
                  loc: {
                    start: 333,
                    end: 351,
                  },
                },
                loc: {
                  start: 315,
                  end: 351,
                },
              },
            ],
            loc: {
              start: 39,
              end: 355,
            },
          },
          loc: {
            start: 3,
            end: 355,
          },
        },
      ],
    },
    location: '',
    hash: 'd9a7810f0517971fd5b21605816b69f447b0619b709151db8a6dac5736bda6a0',
  },
  {
    rawSDL:
      '\n  query getSupplier($ids: [UUID!]) {\n    srmSuppliers(id: $ids) {\n      edges {\n        node {\n          ...getSupplier\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getSupplier',
            loc: {
              start: 9,
              end: 20,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'ids',
                  loc: {
                    start: 22,
                    end: 25,
                  },
                },
                loc: {
                  start: 21,
                  end: 25,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 28,
                        end: 32,
                      },
                    },
                    loc: {
                      start: 28,
                      end: 32,
                    },
                  },
                  loc: {
                    start: 28,
                    end: 33,
                  },
                },
                loc: {
                  start: 27,
                  end: 34,
                },
              },
              directives: [],
              loc: {
                start: 21,
                end: 34,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmSuppliers',
                  loc: {
                    start: 42,
                    end: 54,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 55,
                        end: 57,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'ids',
                        loc: {
                          start: 60,
                          end: 63,
                        },
                      },
                      loc: {
                        start: 59,
                        end: 63,
                      },
                    },
                    loc: {
                      start: 55,
                      end: 63,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 73,
                          end: 78,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 89,
                                end: 93,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getSupplier',
                                    loc: {
                                      start: 109,
                                      end: 120,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 106,
                                    end: 120,
                                  },
                                },
                              ],
                              loc: {
                                start: 94,
                                end: 130,
                              },
                            },
                            loc: {
                              start: 89,
                              end: 130,
                            },
                          },
                        ],
                        loc: {
                          start: 79,
                          end: 138,
                        },
                      },
                      loc: {
                        start: 73,
                        end: 138,
                      },
                    },
                  ],
                  loc: {
                    start: 65,
                    end: 144,
                  },
                },
                loc: {
                  start: 42,
                  end: 144,
                },
              },
            ],
            loc: {
              start: 36,
              end: 148,
            },
          },
          loc: {
            start: 3,
            end: 148,
          },
        },
      ],
    },
    location: '',
    hash: '12fa708b9d007a6f43e42762bb7d39eea723dcd95f17ff184f1b489e89beeb43',
  },
  {
    rawSDL:
      '\n  fragment getSuppliers on SrmSupplier {\n    id\n    guid\n    name\n    enterpriseNumber\n    categoryManager {\n      lastName\n      firstName\n    }\n    productCategories {\n      name\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getSuppliers',
            loc: {
              start: 12,
              end: 24,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmSupplier',
              loc: {
                start: 28,
                end: 39,
              },
            },
            loc: {
              start: 28,
              end: 39,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 46,
                    end: 48,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 46,
                  end: 48,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'guid',
                  loc: {
                    start: 53,
                    end: 57,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 53,
                  end: 57,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 62,
                    end: 66,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 62,
                  end: 66,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'enterpriseNumber',
                  loc: {
                    start: 71,
                    end: 87,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 71,
                  end: 87,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'categoryManager',
                  loc: {
                    start: 92,
                    end: 107,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'lastName',
                        loc: {
                          start: 116,
                          end: 124,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 116,
                        end: 124,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'firstName',
                        loc: {
                          start: 131,
                          end: 140,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 131,
                        end: 140,
                      },
                    },
                  ],
                  loc: {
                    start: 108,
                    end: 146,
                  },
                },
                loc: {
                  start: 92,
                  end: 146,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'productCategories',
                  loc: {
                    start: 151,
                    end: 168,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 177,
                          end: 181,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 177,
                        end: 181,
                      },
                    },
                  ],
                  loc: {
                    start: 169,
                    end: 187,
                  },
                },
                loc: {
                  start: 151,
                  end: 187,
                },
              },
            ],
            loc: {
              start: 40,
              end: 191,
            },
          },
          loc: {
            start: 3,
            end: 191,
          },
        },
      ],
    },
    location: '',
    hash: 'dd0ebad21d8abbdea475042931b2c3e7458723b47d94f61c6746153184f73850',
  },
  {
    rawSDL:
      '\n  query getSuppliers(\n    $first: Int\n    $after: String\n    $id: [UUID!]\n    $searchQuery: String\n    $categoryManagerIds: [UUID!]\n    $productCategoryIds: [UUID!]\n  ) {\n    srmSuppliers(\n      first: $first\n      after: $after\n      id: $id\n      searchQuery: $searchQuery\n      categoryManagerIds: $categoryManagerIds\n      productCategoryIds: $productCategoryIds\n    ) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...getSuppliers\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getSuppliers',
            loc: {
              start: 9,
              end: 21,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 28,
                    end: 33,
                  },
                },
                loc: {
                  start: 27,
                  end: 33,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 35,
                    end: 38,
                  },
                },
                loc: {
                  start: 35,
                  end: 38,
                },
              },
              directives: [],
              loc: {
                start: 27,
                end: 38,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 44,
                    end: 49,
                  },
                },
                loc: {
                  start: 43,
                  end: 49,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 51,
                    end: 57,
                  },
                },
                loc: {
                  start: 51,
                  end: 57,
                },
              },
              directives: [],
              loc: {
                start: 43,
                end: 57,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 63,
                    end: 65,
                  },
                },
                loc: {
                  start: 62,
                  end: 65,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 68,
                        end: 72,
                      },
                    },
                    loc: {
                      start: 68,
                      end: 72,
                    },
                  },
                  loc: {
                    start: 68,
                    end: 73,
                  },
                },
                loc: {
                  start: 67,
                  end: 74,
                },
              },
              directives: [],
              loc: {
                start: 62,
                end: 74,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'searchQuery',
                  loc: {
                    start: 80,
                    end: 91,
                  },
                },
                loc: {
                  start: 79,
                  end: 91,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 93,
                    end: 99,
                  },
                },
                loc: {
                  start: 93,
                  end: 99,
                },
              },
              directives: [],
              loc: {
                start: 79,
                end: 99,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'categoryManagerIds',
                  loc: {
                    start: 105,
                    end: 123,
                  },
                },
                loc: {
                  start: 104,
                  end: 123,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 126,
                        end: 130,
                      },
                    },
                    loc: {
                      start: 126,
                      end: 130,
                    },
                  },
                  loc: {
                    start: 126,
                    end: 131,
                  },
                },
                loc: {
                  start: 125,
                  end: 132,
                },
              },
              directives: [],
              loc: {
                start: 104,
                end: 132,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'productCategoryIds',
                  loc: {
                    start: 138,
                    end: 156,
                  },
                },
                loc: {
                  start: 137,
                  end: 156,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 159,
                        end: 163,
                      },
                    },
                    loc: {
                      start: 159,
                      end: 163,
                    },
                  },
                  loc: {
                    start: 159,
                    end: 164,
                  },
                },
                loc: {
                  start: 158,
                  end: 165,
                },
              },
              directives: [],
              loc: {
                start: 137,
                end: 165,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmSuppliers',
                  loc: {
                    start: 176,
                    end: 188,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 196,
                        end: 201,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 204,
                          end: 209,
                        },
                      },
                      loc: {
                        start: 203,
                        end: 209,
                      },
                    },
                    loc: {
                      start: 196,
                      end: 209,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 216,
                        end: 221,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 224,
                          end: 229,
                        },
                      },
                      loc: {
                        start: 223,
                        end: 229,
                      },
                    },
                    loc: {
                      start: 216,
                      end: 229,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 236,
                        end: 238,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 241,
                          end: 243,
                        },
                      },
                      loc: {
                        start: 240,
                        end: 243,
                      },
                    },
                    loc: {
                      start: 236,
                      end: 243,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 250,
                        end: 261,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'searchQuery',
                        loc: {
                          start: 264,
                          end: 275,
                        },
                      },
                      loc: {
                        start: 263,
                        end: 275,
                      },
                    },
                    loc: {
                      start: 250,
                      end: 275,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'categoryManagerIds',
                      loc: {
                        start: 282,
                        end: 300,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'categoryManagerIds',
                        loc: {
                          start: 303,
                          end: 321,
                        },
                      },
                      loc: {
                        start: 302,
                        end: 321,
                      },
                    },
                    loc: {
                      start: 282,
                      end: 321,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'productCategoryIds',
                      loc: {
                        start: 328,
                        end: 346,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'productCategoryIds',
                        loc: {
                          start: 349,
                          end: 367,
                        },
                      },
                      loc: {
                        start: 348,
                        end: 367,
                      },
                    },
                    loc: {
                      start: 328,
                      end: 367,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 382,
                          end: 390,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 401,
                                end: 412,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 401,
                              end: 412,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 421,
                                end: 430,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 421,
                              end: 430,
                            },
                          },
                        ],
                        loc: {
                          start: 391,
                          end: 438,
                        },
                      },
                      loc: {
                        start: 382,
                        end: 438,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 445,
                          end: 455,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 445,
                        end: 455,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 462,
                          end: 467,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 478,
                                end: 482,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getSuppliers',
                                    loc: {
                                      start: 498,
                                      end: 510,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 495,
                                    end: 510,
                                  },
                                },
                              ],
                              loc: {
                                start: 483,
                                end: 520,
                              },
                            },
                            loc: {
                              start: 478,
                              end: 520,
                            },
                          },
                        ],
                        loc: {
                          start: 468,
                          end: 528,
                        },
                      },
                      loc: {
                        start: 462,
                        end: 528,
                      },
                    },
                  ],
                  loc: {
                    start: 374,
                    end: 534,
                  },
                },
                loc: {
                  start: 176,
                  end: 534,
                },
              },
            ],
            loc: {
              start: 170,
              end: 538,
            },
          },
          loc: {
            start: 3,
            end: 538,
          },
        },
      ],
    },
    location: '',
    hash: '0bc83b63a5a2fd261b83b2c0fff5eba3284cd804d9503fa514e6cb00592addc9',
  },
  {
    rawSDL: '\n  fragment getSuppliersNames on SrmSupplier {\n    id\n    name\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getSuppliersNames',
            loc: {
              start: 12,
              end: 29,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmSupplier',
              loc: {
                start: 33,
                end: 44,
              },
            },
            loc: {
              start: 33,
              end: 44,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 51,
                    end: 53,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 51,
                  end: 53,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 58,
                    end: 62,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 58,
                  end: 62,
                },
              },
            ],
            loc: {
              start: 45,
              end: 66,
            },
          },
          loc: {
            start: 3,
            end: 66,
          },
        },
      ],
    },
    location: '',
    hash: '88811f88ddd89cdcd30d71589d285dfe55cc7d2639bee0ee7ca63cc9b537ea92',
  },
  {
    rawSDL:
      '\n  query getSuppliersNames($first: Int, $after: String, $srmSuppliersSearchQuery: String) {\n    srmSuppliers(first: $first, after: $after, searchQuery: $srmSuppliersSearchQuery) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...getSuppliersNames\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getSuppliersNames',
            loc: {
              start: 9,
              end: 26,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 28,
                    end: 33,
                  },
                },
                loc: {
                  start: 27,
                  end: 33,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 35,
                    end: 38,
                  },
                },
                loc: {
                  start: 35,
                  end: 38,
                },
              },
              directives: [],
              loc: {
                start: 27,
                end: 38,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 41,
                    end: 46,
                  },
                },
                loc: {
                  start: 40,
                  end: 46,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 48,
                    end: 54,
                  },
                },
                loc: {
                  start: 48,
                  end: 54,
                },
              },
              directives: [],
              loc: {
                start: 40,
                end: 54,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'srmSuppliersSearchQuery',
                  loc: {
                    start: 57,
                    end: 80,
                  },
                },
                loc: {
                  start: 56,
                  end: 80,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 82,
                    end: 88,
                  },
                },
                loc: {
                  start: 82,
                  end: 88,
                },
              },
              directives: [],
              loc: {
                start: 56,
                end: 88,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmSuppliers',
                  loc: {
                    start: 96,
                    end: 108,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 109,
                        end: 114,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 117,
                          end: 122,
                        },
                      },
                      loc: {
                        start: 116,
                        end: 122,
                      },
                    },
                    loc: {
                      start: 109,
                      end: 122,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 124,
                        end: 129,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 132,
                          end: 137,
                        },
                      },
                      loc: {
                        start: 131,
                        end: 137,
                      },
                    },
                    loc: {
                      start: 124,
                      end: 137,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 139,
                        end: 150,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'srmSuppliersSearchQuery',
                        loc: {
                          start: 153,
                          end: 176,
                        },
                      },
                      loc: {
                        start: 152,
                        end: 176,
                      },
                    },
                    loc: {
                      start: 139,
                      end: 176,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 186,
                          end: 194,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 205,
                                end: 216,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 205,
                              end: 216,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 225,
                                end: 234,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 225,
                              end: 234,
                            },
                          },
                        ],
                        loc: {
                          start: 195,
                          end: 242,
                        },
                      },
                      loc: {
                        start: 186,
                        end: 242,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 249,
                          end: 259,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 249,
                        end: 259,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 266,
                          end: 271,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 282,
                                end: 286,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getSuppliersNames',
                                    loc: {
                                      start: 302,
                                      end: 319,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 299,
                                    end: 319,
                                  },
                                },
                              ],
                              loc: {
                                start: 287,
                                end: 329,
                              },
                            },
                            loc: {
                              start: 282,
                              end: 329,
                            },
                          },
                        ],
                        loc: {
                          start: 272,
                          end: 337,
                        },
                      },
                      loc: {
                        start: 266,
                        end: 337,
                      },
                    },
                  ],
                  loc: {
                    start: 178,
                    end: 343,
                  },
                },
                loc: {
                  start: 96,
                  end: 343,
                },
              },
            ],
            loc: {
              start: 90,
              end: 347,
            },
          },
          loc: {
            start: 3,
            end: 347,
          },
        },
      ],
    },
    location: '',
    hash: '1e5864602e1e9320c128f9d3542becb6005c0a2032b4c163648f0ff9aac5ad88',
  },
  {
    rawSDL:
      '\n  mutation updateSupplier($id: UUID!, $supplierParams: SrmSupplierInput!) {\n    srmUpdateSupplier(id: $id, supplierParams: $supplierParams)\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'mutation',
          name: {
            kind: 'Name',
            value: 'updateSupplier',
            loc: {
              start: 12,
              end: 26,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 28,
                    end: 30,
                  },
                },
                loc: {
                  start: 27,
                  end: 30,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 32,
                      end: 36,
                    },
                  },
                  loc: {
                    start: 32,
                    end: 36,
                  },
                },
                loc: {
                  start: 32,
                  end: 37,
                },
              },
              directives: [],
              loc: {
                start: 27,
                end: 37,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'supplierParams',
                  loc: {
                    start: 40,
                    end: 54,
                  },
                },
                loc: {
                  start: 39,
                  end: 54,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'SrmSupplierInput',
                    loc: {
                      start: 56,
                      end: 72,
                    },
                  },
                  loc: {
                    start: 56,
                    end: 72,
                  },
                },
                loc: {
                  start: 56,
                  end: 73,
                },
              },
              directives: [],
              loc: {
                start: 39,
                end: 73,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmUpdateSupplier',
                  loc: {
                    start: 81,
                    end: 98,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 99,
                        end: 101,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 104,
                          end: 106,
                        },
                      },
                      loc: {
                        start: 103,
                        end: 106,
                      },
                    },
                    loc: {
                      start: 99,
                      end: 106,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'supplierParams',
                      loc: {
                        start: 108,
                        end: 122,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'supplierParams',
                        loc: {
                          start: 125,
                          end: 139,
                        },
                      },
                      loc: {
                        start: 124,
                        end: 139,
                      },
                    },
                    loc: {
                      start: 108,
                      end: 139,
                    },
                  },
                ],
                directives: [],
                loc: {
                  start: 81,
                  end: 140,
                },
              },
            ],
            loc: {
              start: 75,
              end: 144,
            },
          },
          loc: {
            start: 3,
            end: 144,
          },
        },
      ],
    },
    location: '',
    hash: 'acb5dacb4d05e27de55530be42ab9ffa3799b5c7af44437f835736adc6ad692f',
  },
  {
    rawSDL:
      '\n  fragment getContractsExport on SrmContract {\n    id\n    name\n    number\n    supplier {\n      name\n      id\n      enterpriseNumber\n    }\n    cities {\n      name\n    }\n    dcCities {\n      directCities {\n        name\n      }\n      transitCities {\n        name\n      }\n    }\n    startDate\n    endDate\n    status\n    ownBrand\n    vatPayer\n    priceUpdateFrequency\n    productCategories {\n      name\n    }\n    contactPerson {\n      name\n      jobTitle\n      email\n      phone\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getContractsExport',
            loc: {
              start: 12,
              end: 30,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmContract',
              loc: {
                start: 34,
                end: 45,
              },
            },
            loc: {
              start: 34,
              end: 45,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 52,
                    end: 54,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 52,
                  end: 54,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 59,
                    end: 63,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 59,
                  end: 63,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'number',
                  loc: {
                    start: 68,
                    end: 74,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 68,
                  end: 74,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'supplier',
                  loc: {
                    start: 79,
                    end: 87,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 96,
                          end: 100,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 96,
                        end: 100,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 107,
                          end: 109,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 107,
                        end: 109,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'enterpriseNumber',
                        loc: {
                          start: 116,
                          end: 132,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 116,
                        end: 132,
                      },
                    },
                  ],
                  loc: {
                    start: 88,
                    end: 138,
                  },
                },
                loc: {
                  start: 79,
                  end: 138,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'cities',
                  loc: {
                    start: 143,
                    end: 149,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 158,
                          end: 162,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 158,
                        end: 162,
                      },
                    },
                  ],
                  loc: {
                    start: 150,
                    end: 168,
                  },
                },
                loc: {
                  start: 143,
                  end: 168,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'dcCities',
                  loc: {
                    start: 173,
                    end: 181,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'directCities',
                        loc: {
                          start: 190,
                          end: 202,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 213,
                                end: 217,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 213,
                              end: 217,
                            },
                          },
                        ],
                        loc: {
                          start: 203,
                          end: 225,
                        },
                      },
                      loc: {
                        start: 190,
                        end: 225,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'transitCities',
                        loc: {
                          start: 232,
                          end: 245,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 256,
                                end: 260,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 256,
                              end: 260,
                            },
                          },
                        ],
                        loc: {
                          start: 246,
                          end: 268,
                        },
                      },
                      loc: {
                        start: 232,
                        end: 268,
                      },
                    },
                  ],
                  loc: {
                    start: 182,
                    end: 274,
                  },
                },
                loc: {
                  start: 173,
                  end: 274,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'startDate',
                  loc: {
                    start: 279,
                    end: 288,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 279,
                  end: 288,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'endDate',
                  loc: {
                    start: 293,
                    end: 300,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 293,
                  end: 300,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'status',
                  loc: {
                    start: 305,
                    end: 311,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 305,
                  end: 311,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'ownBrand',
                  loc: {
                    start: 316,
                    end: 324,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 316,
                  end: 324,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'vatPayer',
                  loc: {
                    start: 329,
                    end: 337,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 329,
                  end: 337,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'priceUpdateFrequency',
                  loc: {
                    start: 342,
                    end: 362,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 342,
                  end: 362,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'productCategories',
                  loc: {
                    start: 367,
                    end: 384,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 393,
                          end: 397,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 393,
                        end: 397,
                      },
                    },
                  ],
                  loc: {
                    start: 385,
                    end: 403,
                  },
                },
                loc: {
                  start: 367,
                  end: 403,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'contactPerson',
                  loc: {
                    start: 408,
                    end: 421,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 430,
                          end: 434,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 430,
                        end: 434,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'jobTitle',
                        loc: {
                          start: 441,
                          end: 449,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 441,
                        end: 449,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'email',
                        loc: {
                          start: 456,
                          end: 461,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 456,
                        end: 461,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'phone',
                        loc: {
                          start: 468,
                          end: 473,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 468,
                        end: 473,
                      },
                    },
                  ],
                  loc: {
                    start: 422,
                    end: 479,
                  },
                },
                loc: {
                  start: 408,
                  end: 479,
                },
              },
            ],
            loc: {
              start: 46,
              end: 483,
            },
          },
          loc: {
            start: 3,
            end: 483,
          },
        },
      ],
    },
    location: '',
    hash: '7779f318fca75f30842f56922e4212068a144b479891b9fea5d711747e18a849',
  },
  {
    rawSDL:
      '\n  query getContractsExport(\n    $status: [String!]\n    $searchQuery: String\n    $supplierIds: [UUID!]\n    $cityIds: [UUID!]\n    $first: Int\n    $after: String\n    $productCategoryIds: [UUID!]\n  ) {\n    contracts: srmContracts(\n      status: $status\n      searchQuery: $searchQuery\n      supplierIds: $supplierIds\n      cityIds: $cityIds\n      first: $first\n      after: $after\n      productCategoryIds: $productCategoryIds\n    ) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...getContractsExport\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getContractsExport',
            loc: {
              start: 9,
              end: 27,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'status',
                  loc: {
                    start: 34,
                    end: 40,
                  },
                },
                loc: {
                  start: 33,
                  end: 40,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'String',
                      loc: {
                        start: 43,
                        end: 49,
                      },
                    },
                    loc: {
                      start: 43,
                      end: 49,
                    },
                  },
                  loc: {
                    start: 43,
                    end: 50,
                  },
                },
                loc: {
                  start: 42,
                  end: 51,
                },
              },
              directives: [],
              loc: {
                start: 33,
                end: 51,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'searchQuery',
                  loc: {
                    start: 57,
                    end: 68,
                  },
                },
                loc: {
                  start: 56,
                  end: 68,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 70,
                    end: 76,
                  },
                },
                loc: {
                  start: 70,
                  end: 76,
                },
              },
              directives: [],
              loc: {
                start: 56,
                end: 76,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'supplierIds',
                  loc: {
                    start: 82,
                    end: 93,
                  },
                },
                loc: {
                  start: 81,
                  end: 93,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 96,
                        end: 100,
                      },
                    },
                    loc: {
                      start: 96,
                      end: 100,
                    },
                  },
                  loc: {
                    start: 96,
                    end: 101,
                  },
                },
                loc: {
                  start: 95,
                  end: 102,
                },
              },
              directives: [],
              loc: {
                start: 81,
                end: 102,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'cityIds',
                  loc: {
                    start: 108,
                    end: 115,
                  },
                },
                loc: {
                  start: 107,
                  end: 115,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 118,
                        end: 122,
                      },
                    },
                    loc: {
                      start: 118,
                      end: 122,
                    },
                  },
                  loc: {
                    start: 118,
                    end: 123,
                  },
                },
                loc: {
                  start: 117,
                  end: 124,
                },
              },
              directives: [],
              loc: {
                start: 107,
                end: 124,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 130,
                    end: 135,
                  },
                },
                loc: {
                  start: 129,
                  end: 135,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 137,
                    end: 140,
                  },
                },
                loc: {
                  start: 137,
                  end: 140,
                },
              },
              directives: [],
              loc: {
                start: 129,
                end: 140,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 146,
                    end: 151,
                  },
                },
                loc: {
                  start: 145,
                  end: 151,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 153,
                    end: 159,
                  },
                },
                loc: {
                  start: 153,
                  end: 159,
                },
              },
              directives: [],
              loc: {
                start: 145,
                end: 159,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'productCategoryIds',
                  loc: {
                    start: 165,
                    end: 183,
                  },
                },
                loc: {
                  start: 164,
                  end: 183,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 186,
                        end: 190,
                      },
                    },
                    loc: {
                      start: 186,
                      end: 190,
                    },
                  },
                  loc: {
                    start: 186,
                    end: 191,
                  },
                },
                loc: {
                  start: 185,
                  end: 192,
                },
              },
              directives: [],
              loc: {
                start: 164,
                end: 192,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                alias: {
                  kind: 'Name',
                  value: 'contracts',
                  loc: {
                    start: 203,
                    end: 212,
                  },
                },
                name: {
                  kind: 'Name',
                  value: 'srmContracts',
                  loc: {
                    start: 214,
                    end: 226,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'status',
                      loc: {
                        start: 234,
                        end: 240,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'status',
                        loc: {
                          start: 243,
                          end: 249,
                        },
                      },
                      loc: {
                        start: 242,
                        end: 249,
                      },
                    },
                    loc: {
                      start: 234,
                      end: 249,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 256,
                        end: 267,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'searchQuery',
                        loc: {
                          start: 270,
                          end: 281,
                        },
                      },
                      loc: {
                        start: 269,
                        end: 281,
                      },
                    },
                    loc: {
                      start: 256,
                      end: 281,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'supplierIds',
                      loc: {
                        start: 288,
                        end: 299,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'supplierIds',
                        loc: {
                          start: 302,
                          end: 313,
                        },
                      },
                      loc: {
                        start: 301,
                        end: 313,
                      },
                    },
                    loc: {
                      start: 288,
                      end: 313,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'cityIds',
                      loc: {
                        start: 320,
                        end: 327,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'cityIds',
                        loc: {
                          start: 330,
                          end: 337,
                        },
                      },
                      loc: {
                        start: 329,
                        end: 337,
                      },
                    },
                    loc: {
                      start: 320,
                      end: 337,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 344,
                        end: 349,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 352,
                          end: 357,
                        },
                      },
                      loc: {
                        start: 351,
                        end: 357,
                      },
                    },
                    loc: {
                      start: 344,
                      end: 357,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 364,
                        end: 369,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 372,
                          end: 377,
                        },
                      },
                      loc: {
                        start: 371,
                        end: 377,
                      },
                    },
                    loc: {
                      start: 364,
                      end: 377,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'productCategoryIds',
                      loc: {
                        start: 384,
                        end: 402,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'productCategoryIds',
                        loc: {
                          start: 405,
                          end: 423,
                        },
                      },
                      loc: {
                        start: 404,
                        end: 423,
                      },
                    },
                    loc: {
                      start: 384,
                      end: 423,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 438,
                          end: 446,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 457,
                                end: 468,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 457,
                              end: 468,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 477,
                                end: 486,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 477,
                              end: 486,
                            },
                          },
                        ],
                        loc: {
                          start: 447,
                          end: 494,
                        },
                      },
                      loc: {
                        start: 438,
                        end: 494,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 501,
                          end: 511,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 501,
                        end: 511,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 518,
                          end: 523,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 534,
                                end: 538,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getContractsExport',
                                    loc: {
                                      start: 554,
                                      end: 572,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 551,
                                    end: 572,
                                  },
                                },
                              ],
                              loc: {
                                start: 539,
                                end: 582,
                              },
                            },
                            loc: {
                              start: 534,
                              end: 582,
                            },
                          },
                        ],
                        loc: {
                          start: 524,
                          end: 590,
                        },
                      },
                      loc: {
                        start: 518,
                        end: 590,
                      },
                    },
                  ],
                  loc: {
                    start: 430,
                    end: 596,
                  },
                },
                loc: {
                  start: 203,
                  end: 596,
                },
              },
            ],
            loc: {
              start: 197,
              end: 600,
            },
          },
          loc: {
            start: 3,
            end: 600,
          },
        },
      ],
    },
    location: '',
    hash: '9fe6f6c5c4d12708622ca276612c3beb6d0c2307c8e9673fea64c0f1b50662cc',
  },
  {
    location: '',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'mutation',
          name: {
            kind: 'Name',
            value: 'SrmCancelPriceList',
            loc: {
              start: 9,
              end: 27,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 29,
                    end: 31,
                  },
                },
                loc: {
                  start: 28,
                  end: 31,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 33,
                      end: 37,
                    },
                  },
                  loc: {
                    start: 33,
                    end: 37,
                  },
                },
                loc: {
                  start: 33,
                  end: 38,
                },
              },
              directives: [],
              loc: {
                start: 28,
                end: 38,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmCancelPriceList',
                  loc: {
                    start: 44,
                    end: 62,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 63,
                        end: 65,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 68,
                          end: 70,
                        },
                      },
                      loc: {
                        start: 67,
                        end: 70,
                      },
                    },
                    loc: {
                      start: 63,
                      end: 70,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'FragmentSpread',
                      name: {
                        kind: 'Name',
                        value: 'priceList',
                        loc: {
                          start: 81,
                          end: 90,
                        },
                      },
                      directives: [],
                      loc: {
                        start: 78,
                        end: 90,
                      },
                    },
                  ],
                  loc: {
                    start: 72,
                    end: 94,
                  },
                },
                loc: {
                  start: 44,
                  end: 94,
                },
              },
            ],
            loc: {
              start: 40,
              end: 96,
            },
          },
          loc: {
            start: 0,
            end: 96,
          },
        },
      ],
    },
    rawSDL: 'mutation SrmCancelPriceList($id: UUID!) {\n  srmCancelPriceList(id: $id) {\n    ...priceList\n  }\n}',
    hash: 'ad6c80a5a4d0d540507e1469ce710fbd72409215369a2fe647ba0ccd74554aec',
  },
  {
    rawSDL:
      '\n  fragment getPriceListPositionsExport on SrmPriceListPosition {\n    price\n    warnings {\n      code\n      data {\n        ... on SrmMissingRegularPriceData {\n          cities {\n            name\n          }\n        }\n      }\n    }\n    deletedAt\n    deletedBy {\n      firstName\n      lastName\n    }\n    product {\n      name\n      guid\n      fullCategories {\n        name\n      }\n      manufacturer {\n        name\n      }\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getPriceListPositionsExport',
            loc: {
              start: 12,
              end: 39,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmPriceListPosition',
              loc: {
                start: 43,
                end: 63,
              },
            },
            loc: {
              start: 43,
              end: 63,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'price',
                  loc: {
                    start: 70,
                    end: 75,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 70,
                  end: 75,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'warnings',
                  loc: {
                    start: 80,
                    end: 88,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'code',
                        loc: {
                          start: 97,
                          end: 101,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 97,
                        end: 101,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'data',
                        loc: {
                          start: 108,
                          end: 112,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'InlineFragment',
                            typeCondition: {
                              kind: 'NamedType',
                              name: {
                                kind: 'Name',
                                value: 'SrmMissingRegularPriceData',
                                loc: {
                                  start: 130,
                                  end: 156,
                                },
                              },
                              loc: {
                                start: 130,
                                end: 156,
                              },
                            },
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'cities',
                                    loc: {
                                      start: 169,
                                      end: 175,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  selectionSet: {
                                    kind: 'SelectionSet',
                                    selections: [
                                      {
                                        kind: 'Field',
                                        name: {
                                          kind: 'Name',
                                          value: 'name',
                                          loc: {
                                            start: 190,
                                            end: 194,
                                          },
                                        },
                                        arguments: [],
                                        directives: [],
                                        loc: {
                                          start: 190,
                                          end: 194,
                                        },
                                      },
                                    ],
                                    loc: {
                                      start: 176,
                                      end: 206,
                                    },
                                  },
                                  loc: {
                                    start: 169,
                                    end: 206,
                                  },
                                },
                              ],
                              loc: {
                                start: 157,
                                end: 216,
                              },
                            },
                            loc: {
                              start: 123,
                              end: 216,
                            },
                          },
                        ],
                        loc: {
                          start: 113,
                          end: 224,
                        },
                      },
                      loc: {
                        start: 108,
                        end: 224,
                      },
                    },
                  ],
                  loc: {
                    start: 89,
                    end: 230,
                  },
                },
                loc: {
                  start: 80,
                  end: 230,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'deletedAt',
                  loc: {
                    start: 235,
                    end: 244,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 235,
                  end: 244,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'deletedBy',
                  loc: {
                    start: 249,
                    end: 258,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'firstName',
                        loc: {
                          start: 267,
                          end: 276,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 267,
                        end: 276,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'lastName',
                        loc: {
                          start: 283,
                          end: 291,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 283,
                        end: 291,
                      },
                    },
                  ],
                  loc: {
                    start: 259,
                    end: 297,
                  },
                },
                loc: {
                  start: 249,
                  end: 297,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'product',
                  loc: {
                    start: 302,
                    end: 309,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 318,
                          end: 322,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 318,
                        end: 322,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'guid',
                        loc: {
                          start: 329,
                          end: 333,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 329,
                        end: 333,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'fullCategories',
                        loc: {
                          start: 340,
                          end: 354,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 365,
                                end: 369,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 365,
                              end: 369,
                            },
                          },
                        ],
                        loc: {
                          start: 355,
                          end: 377,
                        },
                      },
                      loc: {
                        start: 340,
                        end: 377,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'manufacturer',
                        loc: {
                          start: 384,
                          end: 396,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'name',
                              loc: {
                                start: 407,
                                end: 411,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 407,
                              end: 411,
                            },
                          },
                        ],
                        loc: {
                          start: 397,
                          end: 419,
                        },
                      },
                      loc: {
                        start: 384,
                        end: 419,
                      },
                    },
                  ],
                  loc: {
                    start: 310,
                    end: 425,
                  },
                },
                loc: {
                  start: 302,
                  end: 425,
                },
              },
            ],
            loc: {
              start: 64,
              end: 429,
            },
          },
          loc: {
            start: 3,
            end: 429,
          },
        },
      ],
    },
    location: '',
    hash: '87bef32fb28dd4fb62020c589826723bce45be7ba1da9817193408e63fa76a02',
  },
  {
    rawSDL:
      '\n  query getPriceListPositionsExport($priceListId: UUID!, $first: Int, $after: String) {\n    srmPriceListPositions(priceListId: $priceListId, first: $first, after: $after) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...getPriceListPositionsExport\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getPriceListPositionsExport',
            loc: {
              start: 9,
              end: 36,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'priceListId',
                  loc: {
                    start: 38,
                    end: 49,
                  },
                },
                loc: {
                  start: 37,
                  end: 49,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 51,
                      end: 55,
                    },
                  },
                  loc: {
                    start: 51,
                    end: 55,
                  },
                },
                loc: {
                  start: 51,
                  end: 56,
                },
              },
              directives: [],
              loc: {
                start: 37,
                end: 56,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 59,
                    end: 64,
                  },
                },
                loc: {
                  start: 58,
                  end: 64,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 66,
                    end: 69,
                  },
                },
                loc: {
                  start: 66,
                  end: 69,
                },
              },
              directives: [],
              loc: {
                start: 58,
                end: 69,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 72,
                    end: 77,
                  },
                },
                loc: {
                  start: 71,
                  end: 77,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 79,
                    end: 85,
                  },
                },
                loc: {
                  start: 79,
                  end: 85,
                },
              },
              directives: [],
              loc: {
                start: 71,
                end: 85,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmPriceListPositions',
                  loc: {
                    start: 93,
                    end: 114,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'priceListId',
                      loc: {
                        start: 115,
                        end: 126,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'priceListId',
                        loc: {
                          start: 129,
                          end: 140,
                        },
                      },
                      loc: {
                        start: 128,
                        end: 140,
                      },
                    },
                    loc: {
                      start: 115,
                      end: 140,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 142,
                        end: 147,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 150,
                          end: 155,
                        },
                      },
                      loc: {
                        start: 149,
                        end: 155,
                      },
                    },
                    loc: {
                      start: 142,
                      end: 155,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 157,
                        end: 162,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 165,
                          end: 170,
                        },
                      },
                      loc: {
                        start: 164,
                        end: 170,
                      },
                    },
                    loc: {
                      start: 157,
                      end: 170,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 180,
                          end: 188,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 199,
                                end: 210,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 199,
                              end: 210,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 219,
                                end: 228,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 219,
                              end: 228,
                            },
                          },
                        ],
                        loc: {
                          start: 189,
                          end: 236,
                        },
                      },
                      loc: {
                        start: 180,
                        end: 236,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 243,
                          end: 253,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 243,
                        end: 253,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 260,
                          end: 265,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 276,
                                end: 280,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getPriceListPositionsExport',
                                    loc: {
                                      start: 296,
                                      end: 323,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 293,
                                    end: 323,
                                  },
                                },
                              ],
                              loc: {
                                start: 281,
                                end: 333,
                              },
                            },
                            loc: {
                              start: 276,
                              end: 333,
                            },
                          },
                        ],
                        loc: {
                          start: 266,
                          end: 341,
                        },
                      },
                      loc: {
                        start: 260,
                        end: 341,
                      },
                    },
                  ],
                  loc: {
                    start: 172,
                    end: 347,
                  },
                },
                loc: {
                  start: 93,
                  end: 347,
                },
              },
            ],
            loc: {
              start: 87,
              end: 351,
            },
          },
          loc: {
            start: 3,
            end: 351,
          },
        },
      ],
    },
    location: '',
    hash: 'c2374ffce431f43cd67b08d2e6895427d410cd85ade7ad4c78a09d9f7251cdd3',
  },
  {
    location: '',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'mutation',
          name: {
            kind: 'Name',
            value: 'SrmActivatePriceList',
            loc: {
              start: 9,
              end: 29,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 31,
                    end: 33,
                  },
                },
                loc: {
                  start: 30,
                  end: 33,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'UUID',
                    loc: {
                      start: 35,
                      end: 39,
                    },
                  },
                  loc: {
                    start: 35,
                    end: 39,
                  },
                },
                loc: {
                  start: 35,
                  end: 40,
                },
              },
              directives: [],
              loc: {
                start: 30,
                end: 40,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmActivatePriceList',
                  loc: {
                    start: 46,
                    end: 66,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 67,
                        end: 69,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 72,
                          end: 74,
                        },
                      },
                      loc: {
                        start: 71,
                        end: 74,
                      },
                    },
                    loc: {
                      start: 67,
                      end: 74,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'FragmentSpread',
                      name: {
                        kind: 'Name',
                        value: 'priceList',
                        loc: {
                          start: 85,
                          end: 94,
                        },
                      },
                      directives: [],
                      loc: {
                        start: 82,
                        end: 94,
                      },
                    },
                  ],
                  loc: {
                    start: 76,
                    end: 98,
                  },
                },
                loc: {
                  start: 46,
                  end: 98,
                },
              },
            ],
            loc: {
              start: 42,
              end: 100,
            },
          },
          loc: {
            start: 0,
            end: 100,
          },
        },
      ],
    },
    rawSDL: 'mutation SrmActivatePriceList($id: UUID!) {\n  srmActivatePriceList(id: $id) {\n    ...priceList\n  }\n}',
    hash: '550b00abaa1ca0af327b76eda001aa25ee14b2254f4f7bde12f7420ab9b3f8b3',
  },
  {
    rawSDL:
      '\n  mutation deletePriceListPosition($ids: [UUID!]!, $isAllowStatusChange: Boolean!) {\n    srmDeletePriceListPosition(ids: $ids, isAllowStatusChange: $isAllowStatusChange)\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'mutation',
          name: {
            kind: 'Name',
            value: 'deletePriceListPosition',
            loc: {
              start: 12,
              end: 35,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'ids',
                  loc: {
                    start: 37,
                    end: 40,
                  },
                },
                loc: {
                  start: 36,
                  end: 40,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'ListType',
                  type: {
                    kind: 'NonNullType',
                    type: {
                      kind: 'NamedType',
                      name: {
                        kind: 'Name',
                        value: 'UUID',
                        loc: {
                          start: 43,
                          end: 47,
                        },
                      },
                      loc: {
                        start: 43,
                        end: 47,
                      },
                    },
                    loc: {
                      start: 43,
                      end: 48,
                    },
                  },
                  loc: {
                    start: 42,
                    end: 49,
                  },
                },
                loc: {
                  start: 42,
                  end: 50,
                },
              },
              directives: [],
              loc: {
                start: 36,
                end: 50,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'isAllowStatusChange',
                  loc: {
                    start: 53,
                    end: 72,
                  },
                },
                loc: {
                  start: 52,
                  end: 72,
                },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Boolean',
                    loc: {
                      start: 74,
                      end: 81,
                    },
                  },
                  loc: {
                    start: 74,
                    end: 81,
                  },
                },
                loc: {
                  start: 74,
                  end: 82,
                },
              },
              directives: [],
              loc: {
                start: 52,
                end: 82,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmDeletePriceListPosition',
                  loc: {
                    start: 90,
                    end: 116,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'ids',
                      loc: {
                        start: 117,
                        end: 120,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'ids',
                        loc: {
                          start: 123,
                          end: 126,
                        },
                      },
                      loc: {
                        start: 122,
                        end: 126,
                      },
                    },
                    loc: {
                      start: 117,
                      end: 126,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'isAllowStatusChange',
                      loc: {
                        start: 128,
                        end: 147,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'isAllowStatusChange',
                        loc: {
                          start: 150,
                          end: 169,
                        },
                      },
                      loc: {
                        start: 149,
                        end: 169,
                      },
                    },
                    loc: {
                      start: 128,
                      end: 169,
                    },
                  },
                ],
                directives: [],
                loc: {
                  start: 90,
                  end: 170,
                },
              },
            ],
            loc: {
              start: 84,
              end: 174,
            },
          },
          loc: {
            start: 3,
            end: 174,
          },
        },
      ],
    },
    location: '',
    hash: '43294973a3c692487d2e96d866f0a26fd9191889cd7a52a8c49ff777076d4fc9',
  },
  {
    rawSDL:
      '\n  fragment getSuppliersExport on SrmSupplier {\n    guid\n    legalName\n    legalAddress\n    name\n    enterpriseNumber\n    ediFrom\n    edoFrom\n    categoryManager {\n      firstName\n      lastName\n    }\n    contactPersons {\n      name\n      jobTitle\n      phone\n      email\n    }\n    productCategories {\n      name\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getSuppliersExport',
            loc: {
              start: 12,
              end: 30,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmSupplier',
              loc: {
                start: 34,
                end: 45,
              },
            },
            loc: {
              start: 34,
              end: 45,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'guid',
                  loc: {
                    start: 52,
                    end: 56,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 52,
                  end: 56,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'legalName',
                  loc: {
                    start: 61,
                    end: 70,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 61,
                  end: 70,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'legalAddress',
                  loc: {
                    start: 75,
                    end: 87,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 75,
                  end: 87,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 92,
                    end: 96,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 92,
                  end: 96,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'enterpriseNumber',
                  loc: {
                    start: 101,
                    end: 117,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 101,
                  end: 117,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'ediFrom',
                  loc: {
                    start: 122,
                    end: 129,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 122,
                  end: 129,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'edoFrom',
                  loc: {
                    start: 134,
                    end: 141,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 134,
                  end: 141,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'categoryManager',
                  loc: {
                    start: 146,
                    end: 161,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'firstName',
                        loc: {
                          start: 170,
                          end: 179,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 170,
                        end: 179,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'lastName',
                        loc: {
                          start: 186,
                          end: 194,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 186,
                        end: 194,
                      },
                    },
                  ],
                  loc: {
                    start: 162,
                    end: 200,
                  },
                },
                loc: {
                  start: 146,
                  end: 200,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'contactPersons',
                  loc: {
                    start: 205,
                    end: 219,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 228,
                          end: 232,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 228,
                        end: 232,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'jobTitle',
                        loc: {
                          start: 239,
                          end: 247,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 239,
                        end: 247,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'phone',
                        loc: {
                          start: 254,
                          end: 259,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 254,
                        end: 259,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'email',
                        loc: {
                          start: 266,
                          end: 271,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 266,
                        end: 271,
                      },
                    },
                  ],
                  loc: {
                    start: 220,
                    end: 277,
                  },
                },
                loc: {
                  start: 205,
                  end: 277,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'productCategories',
                  loc: {
                    start: 282,
                    end: 299,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'name',
                        loc: {
                          start: 308,
                          end: 312,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 308,
                        end: 312,
                      },
                    },
                  ],
                  loc: {
                    start: 300,
                    end: 318,
                  },
                },
                loc: {
                  start: 282,
                  end: 318,
                },
              },
            ],
            loc: {
              start: 46,
              end: 322,
            },
          },
          loc: {
            start: 3,
            end: 322,
          },
        },
      ],
    },
    location: '',
    hash: '3e7c6f8e87098a401567052d0ed73bcb658f2aab032c7710b04398145e19e2f8',
  },
  {
    rawSDL:
      '\n  query getSuppliersExport(\n    $after: String\n    $first: Int\n    $searchQuery: String\n    $id: [UUID!]\n    $categoryManagerIds: [UUID!]\n    $productCategoryIds: [UUID!]\n  ) {\n    suppliers: srmSuppliers(\n      after: $after\n      first: $first\n      searchQuery: $searchQuery\n      id: $id\n      categoryManagerIds: $categoryManagerIds\n      productCategoryIds: $productCategoryIds\n    ) {\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n      totalCount\n      edges {\n        node {\n          ...getSuppliersExport\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getSuppliersExport',
            loc: {
              start: 9,
              end: 27,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 34,
                    end: 39,
                  },
                },
                loc: {
                  start: 33,
                  end: 39,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 41,
                    end: 47,
                  },
                },
                loc: {
                  start: 41,
                  end: 47,
                },
              },
              directives: [],
              loc: {
                start: 33,
                end: 47,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 53,
                    end: 58,
                  },
                },
                loc: {
                  start: 52,
                  end: 58,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 60,
                    end: 63,
                  },
                },
                loc: {
                  start: 60,
                  end: 63,
                },
              },
              directives: [],
              loc: {
                start: 52,
                end: 63,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'searchQuery',
                  loc: {
                    start: 69,
                    end: 80,
                  },
                },
                loc: {
                  start: 68,
                  end: 80,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 82,
                    end: 88,
                  },
                },
                loc: {
                  start: 82,
                  end: 88,
                },
              },
              directives: [],
              loc: {
                start: 68,
                end: 88,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 94,
                    end: 96,
                  },
                },
                loc: {
                  start: 93,
                  end: 96,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 99,
                        end: 103,
                      },
                    },
                    loc: {
                      start: 99,
                      end: 103,
                    },
                  },
                  loc: {
                    start: 99,
                    end: 104,
                  },
                },
                loc: {
                  start: 98,
                  end: 105,
                },
              },
              directives: [],
              loc: {
                start: 93,
                end: 105,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'categoryManagerIds',
                  loc: {
                    start: 111,
                    end: 129,
                  },
                },
                loc: {
                  start: 110,
                  end: 129,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 132,
                        end: 136,
                      },
                    },
                    loc: {
                      start: 132,
                      end: 136,
                    },
                  },
                  loc: {
                    start: 132,
                    end: 137,
                  },
                },
                loc: {
                  start: 131,
                  end: 138,
                },
              },
              directives: [],
              loc: {
                start: 110,
                end: 138,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'productCategoryIds',
                  loc: {
                    start: 144,
                    end: 162,
                  },
                },
                loc: {
                  start: 143,
                  end: 162,
                },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'UUID',
                      loc: {
                        start: 165,
                        end: 169,
                      },
                    },
                    loc: {
                      start: 165,
                      end: 169,
                    },
                  },
                  loc: {
                    start: 165,
                    end: 170,
                  },
                },
                loc: {
                  start: 164,
                  end: 171,
                },
              },
              directives: [],
              loc: {
                start: 143,
                end: 171,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                alias: {
                  kind: 'Name',
                  value: 'suppliers',
                  loc: {
                    start: 182,
                    end: 191,
                  },
                },
                name: {
                  kind: 'Name',
                  value: 'srmSuppliers',
                  loc: {
                    start: 193,
                    end: 205,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 213,
                        end: 218,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 221,
                          end: 226,
                        },
                      },
                      loc: {
                        start: 220,
                        end: 226,
                      },
                    },
                    loc: {
                      start: 213,
                      end: 226,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 233,
                        end: 238,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 241,
                          end: 246,
                        },
                      },
                      loc: {
                        start: 240,
                        end: 246,
                      },
                    },
                    loc: {
                      start: 233,
                      end: 246,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 253,
                        end: 264,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'searchQuery',
                        loc: {
                          start: 267,
                          end: 278,
                        },
                      },
                      loc: {
                        start: 266,
                        end: 278,
                      },
                    },
                    loc: {
                      start: 253,
                      end: 278,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'id',
                      loc: {
                        start: 285,
                        end: 287,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 290,
                          end: 292,
                        },
                      },
                      loc: {
                        start: 289,
                        end: 292,
                      },
                    },
                    loc: {
                      start: 285,
                      end: 292,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'categoryManagerIds',
                      loc: {
                        start: 299,
                        end: 317,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'categoryManagerIds',
                        loc: {
                          start: 320,
                          end: 338,
                        },
                      },
                      loc: {
                        start: 319,
                        end: 338,
                      },
                    },
                    loc: {
                      start: 299,
                      end: 338,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'productCategoryIds',
                      loc: {
                        start: 345,
                        end: 363,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'productCategoryIds',
                        loc: {
                          start: 366,
                          end: 384,
                        },
                      },
                      loc: {
                        start: 365,
                        end: 384,
                      },
                    },
                    loc: {
                      start: 345,
                      end: 384,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 399,
                          end: 407,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 418,
                                end: 427,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 418,
                              end: 427,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 436,
                                end: 447,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 436,
                              end: 447,
                            },
                          },
                        ],
                        loc: {
                          start: 408,
                          end: 455,
                        },
                      },
                      loc: {
                        start: 399,
                        end: 455,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 462,
                          end: 472,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 462,
                        end: 472,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 479,
                          end: 484,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 495,
                                end: 499,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getSuppliersExport',
                                    loc: {
                                      start: 515,
                                      end: 533,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 512,
                                    end: 533,
                                  },
                                },
                              ],
                              loc: {
                                start: 500,
                                end: 543,
                              },
                            },
                            loc: {
                              start: 495,
                              end: 543,
                            },
                          },
                        ],
                        loc: {
                          start: 485,
                          end: 551,
                        },
                      },
                      loc: {
                        start: 479,
                        end: 551,
                      },
                    },
                  ],
                  loc: {
                    start: 391,
                    end: 557,
                  },
                },
                loc: {
                  start: 182,
                  end: 557,
                },
              },
            ],
            loc: {
              start: 176,
              end: 561,
            },
          },
          loc: {
            start: 3,
            end: 561,
          },
        },
      ],
    },
    location: '',
    hash: '3db8dff0f8a11162b78b665199090a29cc1836122e04cc7158bf7702b5bb3661',
  },
  {
    rawSDL: '\n  fragment getCities on SrmCity {\n    id\n    name\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getCities',
            loc: {
              start: 12,
              end: 21,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmCity',
              loc: {
                start: 25,
                end: 32,
              },
            },
            loc: {
              start: 25,
              end: 32,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 39,
                    end: 41,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 39,
                  end: 41,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 46,
                    end: 50,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 46,
                  end: 50,
                },
              },
            ],
            loc: {
              start: 33,
              end: 54,
            },
          },
          loc: {
            start: 3,
            end: 54,
          },
        },
      ],
    },
    location: '',
    hash: '9b1859541afa3c31ade54556b6c0ad6420121dc22a9999947bebfcf92467449e',
  },
  {
    rawSDL:
      '\n  query getCities($first: Int, $after: String) {\n    cities: srmCities(first: $first, after: $after) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      totalCount\n      edges {\n        node {\n          ...getCities\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getCities',
            loc: {
              start: 9,
              end: 18,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 20,
                    end: 25,
                  },
                },
                loc: {
                  start: 19,
                  end: 25,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 27,
                    end: 30,
                  },
                },
                loc: {
                  start: 27,
                  end: 30,
                },
              },
              directives: [],
              loc: {
                start: 19,
                end: 30,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 33,
                    end: 38,
                  },
                },
                loc: {
                  start: 32,
                  end: 38,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 40,
                    end: 46,
                  },
                },
                loc: {
                  start: 40,
                  end: 46,
                },
              },
              directives: [],
              loc: {
                start: 32,
                end: 46,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                alias: {
                  kind: 'Name',
                  value: 'cities',
                  loc: {
                    start: 54,
                    end: 60,
                  },
                },
                name: {
                  kind: 'Name',
                  value: 'srmCities',
                  loc: {
                    start: 62,
                    end: 71,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 72,
                        end: 77,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 80,
                          end: 85,
                        },
                      },
                      loc: {
                        start: 79,
                        end: 85,
                      },
                    },
                    loc: {
                      start: 72,
                      end: 85,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 87,
                        end: 92,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 95,
                          end: 100,
                        },
                      },
                      loc: {
                        start: 94,
                        end: 100,
                      },
                    },
                    loc: {
                      start: 87,
                      end: 100,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 110,
                          end: 118,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 129,
                                end: 140,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 129,
                              end: 140,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 149,
                                end: 158,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 149,
                              end: 158,
                            },
                          },
                        ],
                        loc: {
                          start: 119,
                          end: 166,
                        },
                      },
                      loc: {
                        start: 110,
                        end: 166,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 173,
                          end: 183,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 173,
                        end: 183,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 190,
                          end: 195,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 206,
                                end: 210,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getCities',
                                    loc: {
                                      start: 226,
                                      end: 235,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 223,
                                    end: 235,
                                  },
                                },
                              ],
                              loc: {
                                start: 211,
                                end: 245,
                              },
                            },
                            loc: {
                              start: 206,
                              end: 245,
                            },
                          },
                        ],
                        loc: {
                          start: 196,
                          end: 253,
                        },
                      },
                      loc: {
                        start: 190,
                        end: 253,
                      },
                    },
                  ],
                  loc: {
                    start: 102,
                    end: 259,
                  },
                },
                loc: {
                  start: 54,
                  end: 259,
                },
              },
            ],
            loc: {
              start: 48,
              end: 263,
            },
          },
          loc: {
            start: 3,
            end: 263,
          },
        },
      ],
    },
    location: '',
    hash: 'b2ed09618aee4a25c10466412a46ea2f3122325031695e5e608a5658556cd657',
  },
  {
    rawSDL:
      '\n  fragment distributionCenter on SrmDistributionCenter {\n    city {\n      id\n    }\n    directCities {\n      id\n    }\n    transitCities {\n      id\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'distributionCenter',
            loc: {
              start: 12,
              end: 30,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmDistributionCenter',
              loc: {
                start: 34,
                end: 55,
              },
            },
            loc: {
              start: 34,
              end: 55,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'city',
                  loc: {
                    start: 62,
                    end: 66,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 75,
                          end: 77,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 75,
                        end: 77,
                      },
                    },
                  ],
                  loc: {
                    start: 67,
                    end: 83,
                  },
                },
                loc: {
                  start: 62,
                  end: 83,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'directCities',
                  loc: {
                    start: 88,
                    end: 100,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 109,
                          end: 111,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 109,
                        end: 111,
                      },
                    },
                  ],
                  loc: {
                    start: 101,
                    end: 117,
                  },
                },
                loc: {
                  start: 88,
                  end: 117,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'transitCities',
                  loc: {
                    start: 122,
                    end: 135,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 144,
                          end: 146,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 144,
                        end: 146,
                      },
                    },
                  ],
                  loc: {
                    start: 136,
                    end: 152,
                  },
                },
                loc: {
                  start: 122,
                  end: 152,
                },
              },
            ],
            loc: {
              start: 56,
              end: 156,
            },
          },
          loc: {
            start: 3,
            end: 156,
          },
        },
      ],
    },
    location: '',
    hash: '46c8d7c3cb6eeb05c2e5d978a1fb726557dea6dc5c8eed6506d9a21048573450',
  },
  {
    rawSDL:
      '\n  query getDistributionCenters($first: Int, $after: String) {\n    srmDistributionCenters(first: $first, after: $after) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...distributionCenter\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getDistributionCenters',
            loc: {
              start: 9,
              end: 31,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 33,
                    end: 38,
                  },
                },
                loc: {
                  start: 32,
                  end: 38,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 40,
                    end: 43,
                  },
                },
                loc: {
                  start: 40,
                  end: 43,
                },
              },
              directives: [],
              loc: {
                start: 32,
                end: 43,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 46,
                    end: 51,
                  },
                },
                loc: {
                  start: 45,
                  end: 51,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 53,
                    end: 59,
                  },
                },
                loc: {
                  start: 53,
                  end: 59,
                },
              },
              directives: [],
              loc: {
                start: 45,
                end: 59,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmDistributionCenters',
                  loc: {
                    start: 67,
                    end: 89,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 90,
                        end: 95,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 98,
                          end: 103,
                        },
                      },
                      loc: {
                        start: 97,
                        end: 103,
                      },
                    },
                    loc: {
                      start: 90,
                      end: 103,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 105,
                        end: 110,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 113,
                          end: 118,
                        },
                      },
                      loc: {
                        start: 112,
                        end: 118,
                      },
                    },
                    loc: {
                      start: 105,
                      end: 118,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 128,
                          end: 138,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 128,
                        end: 138,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 145,
                          end: 153,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 164,
                                end: 175,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 164,
                              end: 175,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 184,
                                end: 193,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 184,
                              end: 193,
                            },
                          },
                        ],
                        loc: {
                          start: 154,
                          end: 201,
                        },
                      },
                      loc: {
                        start: 145,
                        end: 201,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 208,
                          end: 213,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 224,
                                end: 228,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'distributionCenter',
                                    loc: {
                                      start: 244,
                                      end: 262,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 241,
                                    end: 262,
                                  },
                                },
                              ],
                              loc: {
                                start: 229,
                                end: 272,
                              },
                            },
                            loc: {
                              start: 224,
                              end: 272,
                            },
                          },
                        ],
                        loc: {
                          start: 214,
                          end: 280,
                        },
                      },
                      loc: {
                        start: 208,
                        end: 280,
                      },
                    },
                  ],
                  loc: {
                    start: 120,
                    end: 286,
                  },
                },
                loc: {
                  start: 67,
                  end: 286,
                },
              },
            ],
            loc: {
              start: 61,
              end: 290,
            },
          },
          loc: {
            start: 3,
            end: 290,
          },
        },
      ],
    },
    location: '',
    hash: 'c01effde30ad5b3f98fe183580395e6f56611644d8c0354e070cf83c7ef3e927',
  },
  {
    rawSDL: '\n  fragment node on SrmNode {\n    id\n    name\n    city {\n      id\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'node',
            loc: {
              start: 12,
              end: 16,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmNode',
              loc: {
                start: 20,
                end: 27,
              },
            },
            loc: {
              start: 20,
              end: 27,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 34,
                    end: 36,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 34,
                  end: 36,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 41,
                    end: 45,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 41,
                  end: 45,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'city',
                  loc: {
                    start: 50,
                    end: 54,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 63,
                          end: 65,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 63,
                        end: 65,
                      },
                    },
                  ],
                  loc: {
                    start: 55,
                    end: 71,
                  },
                },
                loc: {
                  start: 50,
                  end: 71,
                },
              },
            ],
            loc: {
              start: 28,
              end: 75,
            },
          },
          loc: {
            start: 3,
            end: 75,
          },
        },
      ],
    },
    location: '',
    hash: '3f474f646c53b29ed403be8aa0cf25f0316ad008cd41a51c0fd83da83f7789b7',
  },
  {
    rawSDL:
      '\n  query SrmNodes($first: Int, $after: String) {\n    nodes: srmNodes(first: $first, after: $after) {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...node\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'SrmNodes',
            loc: {
              start: 9,
              end: 17,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 19,
                    end: 24,
                  },
                },
                loc: {
                  start: 18,
                  end: 24,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 26,
                    end: 29,
                  },
                },
                loc: {
                  start: 26,
                  end: 29,
                },
              },
              directives: [],
              loc: {
                start: 18,
                end: 29,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 32,
                    end: 37,
                  },
                },
                loc: {
                  start: 31,
                  end: 37,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 39,
                    end: 45,
                  },
                },
                loc: {
                  start: 39,
                  end: 45,
                },
              },
              directives: [],
              loc: {
                start: 31,
                end: 45,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                alias: {
                  kind: 'Name',
                  value: 'nodes',
                  loc: {
                    start: 53,
                    end: 58,
                  },
                },
                name: {
                  kind: 'Name',
                  value: 'srmNodes',
                  loc: {
                    start: 60,
                    end: 68,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 69,
                        end: 74,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 77,
                          end: 82,
                        },
                      },
                      loc: {
                        start: 76,
                        end: 82,
                      },
                    },
                    loc: {
                      start: 69,
                      end: 82,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 84,
                        end: 89,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 92,
                          end: 97,
                        },
                      },
                      loc: {
                        start: 91,
                        end: 97,
                      },
                    },
                    loc: {
                      start: 84,
                      end: 97,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 107,
                          end: 115,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 126,
                                end: 137,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 126,
                              end: 137,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 146,
                                end: 155,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 146,
                              end: 155,
                            },
                          },
                        ],
                        loc: {
                          start: 116,
                          end: 163,
                        },
                      },
                      loc: {
                        start: 107,
                        end: 163,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 170,
                          end: 175,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 186,
                                end: 190,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'node',
                                    loc: {
                                      start: 206,
                                      end: 210,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 203,
                                    end: 210,
                                  },
                                },
                              ],
                              loc: {
                                start: 191,
                                end: 220,
                              },
                            },
                            loc: {
                              start: 186,
                              end: 220,
                            },
                          },
                        ],
                        loc: {
                          start: 176,
                          end: 228,
                        },
                      },
                      loc: {
                        start: 170,
                        end: 228,
                      },
                    },
                  ],
                  loc: {
                    start: 99,
                    end: 234,
                  },
                },
                loc: {
                  start: 53,
                  end: 234,
                },
              },
            ],
            loc: {
              start: 47,
              end: 238,
            },
          },
          loc: {
            start: 3,
            end: 238,
          },
        },
      ],
    },
    location: '',
    hash: 'a2fa1860b984a839bbe1d0f93be75b9febecde7b8f52a78128e59e06e07d9557',
  },
  {
    rawSDL: '\n  query getPeriodUnits {\n    srmPeriodUnits {\n      code\n      id\n    }\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getPeriodUnits',
            loc: {
              start: 9,
              end: 23,
            },
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmPeriodUnits',
                  loc: {
                    start: 30,
                    end: 44,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'code',
                        loc: {
                          start: 53,
                          end: 57,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 53,
                        end: 57,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'id',
                        loc: {
                          start: 64,
                          end: 66,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 64,
                        end: 66,
                      },
                    },
                  ],
                  loc: {
                    start: 45,
                    end: 72,
                  },
                },
                loc: {
                  start: 30,
                  end: 72,
                },
              },
            ],
            loc: {
              start: 24,
              end: 76,
            },
          },
          loc: {
            start: 3,
            end: 76,
          },
        },
      ],
    },
    location: '',
    hash: '10a631c6faeb3425d5ba43ecbd4ae4c1d41f304f2bc45eb3d46ffe627e34b97c',
  },
  {
    rawSDL: '\n  fragment productCategory on SrmProductCategory {\n    id\n    name\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'productCategory',
            loc: {
              start: 12,
              end: 27,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmProductCategory',
              loc: {
                start: 31,
                end: 49,
              },
            },
            loc: {
              start: 31,
              end: 49,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 56,
                    end: 58,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 56,
                  end: 58,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 63,
                    end: 67,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 63,
                  end: 67,
                },
              },
            ],
            loc: {
              start: 50,
              end: 71,
            },
          },
          loc: {
            start: 3,
            end: 71,
          },
        },
      ],
    },
    location: '',
    hash: 'f0456cc9d39d741ae27d7b9e6e692f2a9534e271a7f1e24ffb7886f817f5e085',
  },
  {
    rawSDL:
      '\n  query getProductCategories($after: String, $first: Int, $searchQuery: String) {\n    srmProductCategories(after: $after, first: $first, searchQuery: $searchQuery) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...productCategory\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getProductCategories',
            loc: {
              start: 9,
              end: 29,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 31,
                    end: 36,
                  },
                },
                loc: {
                  start: 30,
                  end: 36,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 38,
                    end: 44,
                  },
                },
                loc: {
                  start: 38,
                  end: 44,
                },
              },
              directives: [],
              loc: {
                start: 30,
                end: 44,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 47,
                    end: 52,
                  },
                },
                loc: {
                  start: 46,
                  end: 52,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 54,
                    end: 57,
                  },
                },
                loc: {
                  start: 54,
                  end: 57,
                },
              },
              directives: [],
              loc: {
                start: 46,
                end: 57,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'searchQuery',
                  loc: {
                    start: 60,
                    end: 71,
                  },
                },
                loc: {
                  start: 59,
                  end: 71,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 73,
                    end: 79,
                  },
                },
                loc: {
                  start: 73,
                  end: 79,
                },
              },
              directives: [],
              loc: {
                start: 59,
                end: 79,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmProductCategories',
                  loc: {
                    start: 87,
                    end: 107,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 108,
                        end: 113,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 116,
                          end: 121,
                        },
                      },
                      loc: {
                        start: 115,
                        end: 121,
                      },
                    },
                    loc: {
                      start: 108,
                      end: 121,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 123,
                        end: 128,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 131,
                          end: 136,
                        },
                      },
                      loc: {
                        start: 130,
                        end: 136,
                      },
                    },
                    loc: {
                      start: 123,
                      end: 136,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 138,
                        end: 149,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'searchQuery',
                        loc: {
                          start: 152,
                          end: 163,
                        },
                      },
                      loc: {
                        start: 151,
                        end: 163,
                      },
                    },
                    loc: {
                      start: 138,
                      end: 163,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 173,
                          end: 183,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 173,
                        end: 183,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 190,
                          end: 198,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 209,
                                end: 220,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 209,
                              end: 220,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 229,
                                end: 238,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 229,
                              end: 238,
                            },
                          },
                        ],
                        loc: {
                          start: 199,
                          end: 246,
                        },
                      },
                      loc: {
                        start: 190,
                        end: 246,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 253,
                          end: 258,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 269,
                                end: 273,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'productCategory',
                                    loc: {
                                      start: 289,
                                      end: 304,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 286,
                                    end: 304,
                                  },
                                },
                              ],
                              loc: {
                                start: 274,
                                end: 314,
                              },
                            },
                            loc: {
                              start: 269,
                              end: 314,
                            },
                          },
                        ],
                        loc: {
                          start: 259,
                          end: 322,
                        },
                      },
                      loc: {
                        start: 253,
                        end: 322,
                      },
                    },
                  ],
                  loc: {
                    start: 165,
                    end: 328,
                  },
                },
                loc: {
                  start: 87,
                  end: 328,
                },
              },
            ],
            loc: {
              start: 81,
              end: 332,
            },
          },
          loc: {
            start: 3,
            end: 332,
          },
        },
      ],
    },
    location: '',
    hash: 'a4622778da6a9eb465e413c6f375fef77864cd48d38d555d2d62f1b229e9e959',
  },
  {
    rawSDL: '\n  fragment product on SrmProduct {\n    id\n    name\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'product',
            loc: {
              start: 12,
              end: 19,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmProduct',
              loc: {
                start: 23,
                end: 33,
              },
            },
            loc: {
              start: 23,
              end: 33,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 40,
                    end: 42,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 40,
                  end: 42,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 47,
                    end: 51,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 47,
                  end: 51,
                },
              },
            ],
            loc: {
              start: 34,
              end: 55,
            },
          },
          loc: {
            start: 3,
            end: 55,
          },
        },
      ],
    },
    location: '',
    hash: '032d61d0ea09d83796ffe2aa948e6246c3ccce12bae3c7492520033c92b0eaa9',
  },
  {
    rawSDL:
      '\n  query SrmProducts($first: Int, $after: String, $searchQuery: String) {\n    srmProducts(first: $first, after: $after, searchQuery: $searchQuery) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'SrmProducts',
            loc: {
              start: 9,
              end: 20,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 22,
                    end: 27,
                  },
                },
                loc: {
                  start: 21,
                  end: 27,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 29,
                    end: 32,
                  },
                },
                loc: {
                  start: 29,
                  end: 32,
                },
              },
              directives: [],
              loc: {
                start: 21,
                end: 32,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 35,
                    end: 40,
                  },
                },
                loc: {
                  start: 34,
                  end: 40,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 42,
                    end: 48,
                  },
                },
                loc: {
                  start: 42,
                  end: 48,
                },
              },
              directives: [],
              loc: {
                start: 34,
                end: 48,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'searchQuery',
                  loc: {
                    start: 51,
                    end: 62,
                  },
                },
                loc: {
                  start: 50,
                  end: 62,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 64,
                    end: 70,
                  },
                },
                loc: {
                  start: 64,
                  end: 70,
                },
              },
              directives: [],
              loc: {
                start: 50,
                end: 70,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmProducts',
                  loc: {
                    start: 78,
                    end: 89,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 90,
                        end: 95,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 98,
                          end: 103,
                        },
                      },
                      loc: {
                        start: 97,
                        end: 103,
                      },
                    },
                    loc: {
                      start: 90,
                      end: 103,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 105,
                        end: 110,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 113,
                          end: 118,
                        },
                      },
                      loc: {
                        start: 112,
                        end: 118,
                      },
                    },
                    loc: {
                      start: 105,
                      end: 118,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 120,
                        end: 131,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'searchQuery',
                        loc: {
                          start: 134,
                          end: 145,
                        },
                      },
                      loc: {
                        start: 133,
                        end: 145,
                      },
                    },
                    loc: {
                      start: 120,
                      end: 145,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 155,
                          end: 165,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 155,
                        end: 165,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 172,
                          end: 180,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 191,
                                end: 202,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 191,
                              end: 202,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 211,
                                end: 220,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 211,
                              end: 220,
                            },
                          },
                        ],
                        loc: {
                          start: 181,
                          end: 228,
                        },
                      },
                      loc: {
                        start: 172,
                        end: 228,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 235,
                          end: 240,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 251,
                                end: 255,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'product',
                                    loc: {
                                      start: 271,
                                      end: 278,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 268,
                                    end: 278,
                                  },
                                },
                              ],
                              loc: {
                                start: 256,
                                end: 288,
                              },
                            },
                            loc: {
                              start: 251,
                              end: 288,
                            },
                          },
                        ],
                        loc: {
                          start: 241,
                          end: 296,
                        },
                      },
                      loc: {
                        start: 235,
                        end: 296,
                      },
                    },
                  ],
                  loc: {
                    start: 147,
                    end: 302,
                  },
                },
                loc: {
                  start: 78,
                  end: 302,
                },
              },
            ],
            loc: {
              start: 72,
              end: 306,
            },
          },
          loc: {
            start: 3,
            end: 306,
          },
        },
      ],
    },
    location: '',
    hash: '81d1344b7ea548c1d79dbede397f70ade54d21e52fb68fdab060dd218cf152d2',
  },
  {
    rawSDL: '\n  fragment getUsers on SrmUser {\n    id\n    firstName\n    lastName\n  }\n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'FragmentDefinition',
          name: {
            kind: 'Name',
            value: 'getUsers',
            loc: {
              start: 12,
              end: 20,
            },
          },
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'SrmUser',
              loc: {
                start: 24,
                end: 31,
              },
            },
            loc: {
              start: 24,
              end: 31,
            },
          },
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id',
                  loc: {
                    start: 38,
                    end: 40,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 38,
                  end: 40,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'firstName',
                  loc: {
                    start: 45,
                    end: 54,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 45,
                  end: 54,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'lastName',
                  loc: {
                    start: 59,
                    end: 67,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 59,
                  end: 67,
                },
              },
            ],
            loc: {
              start: 32,
              end: 71,
            },
          },
          loc: {
            start: 3,
            end: 71,
          },
        },
      ],
    },
    location: '',
    hash: 'd5870ac871ae4d8155f04bce441512e38123c02a737ad4e366804c526bf870a5',
  },
  {
    rawSDL:
      '\n  query getUsers($first: Int, $after: String, $searchQuery: String, $userTypeCode: SrmUserTypeCode) {\n    srmUsers(first: $first, after: $after, searchQuery: $searchQuery, userTypeCode: $userTypeCode) {\n      totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        node {\n          ...getUsers\n        }\n      }\n    }\n  }\n  \n',
    document: {
      kind: 'Document',
      definitions: [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          name: {
            kind: 'Name',
            value: 'getUsers',
            loc: {
              start: 9,
              end: 17,
            },
          },
          variableDefinitions: [
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'first',
                  loc: {
                    start: 19,
                    end: 24,
                  },
                },
                loc: {
                  start: 18,
                  end: 24,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: {
                    start: 26,
                    end: 29,
                  },
                },
                loc: {
                  start: 26,
                  end: 29,
                },
              },
              directives: [],
              loc: {
                start: 18,
                end: 29,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'after',
                  loc: {
                    start: 32,
                    end: 37,
                  },
                },
                loc: {
                  start: 31,
                  end: 37,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 39,
                    end: 45,
                  },
                },
                loc: {
                  start: 39,
                  end: 45,
                },
              },
              directives: [],
              loc: {
                start: 31,
                end: 45,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'searchQuery',
                  loc: {
                    start: 48,
                    end: 59,
                  },
                },
                loc: {
                  start: 47,
                  end: 59,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: {
                    start: 61,
                    end: 67,
                  },
                },
                loc: {
                  start: 61,
                  end: 67,
                },
              },
              directives: [],
              loc: {
                start: 47,
                end: 67,
              },
            },
            {
              kind: 'VariableDefinition',
              variable: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'userTypeCode',
                  loc: {
                    start: 70,
                    end: 82,
                  },
                },
                loc: {
                  start: 69,
                  end: 82,
                },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'SrmUserTypeCode',
                  loc: {
                    start: 84,
                    end: 99,
                  },
                },
                loc: {
                  start: 84,
                  end: 99,
                },
              },
              directives: [],
              loc: {
                start: 69,
                end: 99,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'srmUsers',
                  loc: {
                    start: 107,
                    end: 115,
                  },
                },
                arguments: [
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'first',
                      loc: {
                        start: 116,
                        end: 121,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 124,
                          end: 129,
                        },
                      },
                      loc: {
                        start: 123,
                        end: 129,
                      },
                    },
                    loc: {
                      start: 116,
                      end: 129,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'after',
                      loc: {
                        start: 131,
                        end: 136,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'after',
                        loc: {
                          start: 139,
                          end: 144,
                        },
                      },
                      loc: {
                        start: 138,
                        end: 144,
                      },
                    },
                    loc: {
                      start: 131,
                      end: 144,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'searchQuery',
                      loc: {
                        start: 146,
                        end: 157,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'searchQuery',
                        loc: {
                          start: 160,
                          end: 171,
                        },
                      },
                      loc: {
                        start: 159,
                        end: 171,
                      },
                    },
                    loc: {
                      start: 146,
                      end: 171,
                    },
                  },
                  {
                    kind: 'Argument',
                    name: {
                      kind: 'Name',
                      value: 'userTypeCode',
                      loc: {
                        start: 173,
                        end: 185,
                      },
                    },
                    value: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'userTypeCode',
                        loc: {
                          start: 188,
                          end: 200,
                        },
                      },
                      loc: {
                        start: 187,
                        end: 200,
                      },
                    },
                    loc: {
                      start: 173,
                      end: 200,
                    },
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'totalCount',
                        loc: {
                          start: 210,
                          end: 220,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 210,
                        end: 220,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'pageInfo',
                        loc: {
                          start: 227,
                          end: 235,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'hasNextPage',
                              loc: {
                                start: 246,
                                end: 257,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 246,
                              end: 257,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'endCursor',
                              loc: {
                                start: 266,
                                end: 275,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 266,
                              end: 275,
                            },
                          },
                        ],
                        loc: {
                          start: 236,
                          end: 283,
                        },
                      },
                      loc: {
                        start: 227,
                        end: 283,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'edges',
                        loc: {
                          start: 290,
                          end: 295,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'node',
                              loc: {
                                start: 306,
                                end: 310,
                              },
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                {
                                  kind: 'FragmentSpread',
                                  name: {
                                    kind: 'Name',
                                    value: 'getUsers',
                                    loc: {
                                      start: 326,
                                      end: 334,
                                    },
                                  },
                                  directives: [],
                                  loc: {
                                    start: 323,
                                    end: 334,
                                  },
                                },
                              ],
                              loc: {
                                start: 311,
                                end: 344,
                              },
                            },
                            loc: {
                              start: 306,
                              end: 344,
                            },
                          },
                        ],
                        loc: {
                          start: 296,
                          end: 352,
                        },
                      },
                      loc: {
                        start: 290,
                        end: 352,
                      },
                    },
                  ],
                  loc: {
                    start: 202,
                    end: 358,
                  },
                },
                loc: {
                  start: 107,
                  end: 358,
                },
              },
            ],
            loc: {
              start: 101,
              end: 362,
            },
          },
          loc: {
            start: 3,
            end: 362,
          },
        },
      ],
    },
    location: '',
    hash: '51b08b5b037fc361542b58f96b3d0bb62116f6dd4243fa0026480d7bcb31d581',
  },
];
