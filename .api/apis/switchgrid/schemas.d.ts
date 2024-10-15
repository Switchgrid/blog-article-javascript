declare const Ask: {
    readonly body: {
        readonly $schema: "http://json-schema.org/draft-07/schema#";
        readonly type: "object";
        readonly required: readonly ["electricityContracts", "signer", "consentCollectionMedium", "scopesAndPurpose", "consentDuration"];
        readonly properties: {
            readonly electricityContracts: {
                readonly type: "array";
                readonly items: {
                    readonly anyOf: readonly [{
                        readonly type: "object";
                        readonly required: readonly ["prm", "heldBy", "address"];
                        readonly properties: {
                            readonly prm: {
                                readonly type: "string";
                                readonly pattern: "^[0-9]{14}$";
                                readonly examples: readonly ["00059461297239"];
                            };
                            readonly heldBy: {
                                readonly anyOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["genre", "firstName", "lastName"];
                                    readonly properties: {
                                        readonly genre: {
                                            readonly enum: readonly ["M", "F"];
                                        };
                                        readonly firstName: {
                                            readonly type: "string";
                                            readonly description: "a string";
                                            readonly title: "string";
                                        };
                                        readonly lastName: {
                                            readonly type: "string";
                                            readonly description: "a string";
                                            readonly title: "string";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["name", "siret"];
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "a string";
                                            readonly title: "string";
                                        };
                                        readonly siret: {
                                            readonly type: "string";
                                            readonly description: "a string";
                                            readonly title: "string";
                                        };
                                        readonly otherNames: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                                readonly description: "a string";
                                                readonly title: "string";
                                            };
                                            readonly description: "Other names of the company. Max 2 names.";
                                            readonly maxItems: 2;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                }];
                                readonly description: "The person or company that holds the contract";
                            };
                            readonly address: {
                                readonly type: "object";
                                readonly required: readonly ["street", "postalCode", "city", "country"];
                                readonly properties: {
                                    readonly street: {
                                        readonly type: "string";
                                        readonly description: "a string";
                                        readonly title: "string";
                                    };
                                    readonly postalCode: {
                                        readonly type: "string";
                                        readonly description: "a string";
                                        readonly title: "string";
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly description: "a string";
                                        readonly title: "string";
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly description: "a string";
                                        readonly title: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "The address where the electricity is consumed";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly $schema: "http://json-schema.org/draft-07/schema#";
                    }, {
                        readonly type: "string";
                        readonly description: "The identifier of an electricity contract, that comes from the endpoint GET /search_contract";
                        readonly format: "uuid";
                    }];
                };
            };
            readonly signer: {
                readonly type: "object";
                readonly required: readonly ["lastName", "firstName", "phone", "genre", "email"];
                readonly properties: {
                    readonly lastName: {
                        readonly type: "string";
                        readonly description: "a string";
                        readonly title: "string";
                    };
                    readonly firstName: {
                        readonly type: "string";
                        readonly description: "a string";
                        readonly title: "string";
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly description: "a string";
                        readonly title: "string";
                    };
                    readonly genre: {
                        readonly enum: readonly ["M", "F"];
                    };
                    readonly email: {
                        readonly identifier: "Email";
                        readonly description: "an email";
                        readonly type: "string";
                        readonly examples: readonly ["user@domain.com"];
                    };
                };
                readonly additionalProperties: false;
                readonly description: "The person signing the Consent request";
                readonly $schema: "http://json-schema.org/draft-07/schema#";
            };
            readonly consentCollectionMedium: {
                readonly anyOf: readonly [{
                    readonly type: "object";
                    readonly required: readonly ["service"];
                    readonly properties: {
                        readonly service: {
                            readonly const: "DOCUSEAL";
                        };
                    };
                    readonly additionalProperties: false;
                }, {
                    readonly type: "object";
                    readonly required: readonly ["service"];
                    readonly properties: {
                        readonly service: {
                            readonly const: "WEB_HOSTED";
                        };
                    };
                    readonly additionalProperties: false;
                }];
                readonly $schema: "http://json-schema.org/draft-07/schema#";
            };
            readonly options: {
                readonly type: "object";
                readonly required: readonly [];
                readonly properties: {
                    readonly skipAddressCheck: {
                        readonly type: "boolean";
                        readonly description: "a boolean";
                        readonly title: "boolean";
                    };
                };
                readonly additionalProperties: false;
            };
            readonly scopesAndPurpose: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["scopes", "purposes"];
                    readonly properties: {
                        readonly scopes: {
                            readonly type: "array";
                            readonly items: {
                                readonly anyOf: readonly [{
                                    readonly anyOf: readonly [{
                                        readonly type: "object";
                                        readonly required: readonly ["service", "id"];
                                        readonly properties: {
                                            readonly service: {
                                                readonly const: "ENEDIS_RAW_API";
                                            };
                                            readonly id: {
                                                readonly const: "DETAILS_CONTRACTUELS";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    }, {
                                        readonly type: "object";
                                        readonly required: readonly ["service", "id", "args"];
                                        readonly properties: {
                                            readonly service: {
                                                readonly const: "ENEDIS_RAW_API";
                                            };
                                            readonly id: {
                                                readonly const: "CONSUMPTION_DATA";
                                            };
                                            readonly args: {
                                                readonly type: "object";
                                                readonly required: readonly ["types", "directions"];
                                                readonly properties: {
                                                    readonly types: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly enum: readonly ["CDC", "PMAX", "IDX", "ENERGIE"];
                                                        };
                                                    };
                                                    readonly directions: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                                                        };
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    }];
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["id", "args"];
                                    readonly properties: {
                                        readonly id: {
                                            readonly const: "ELECTRICITY_TIMESERIES";
                                        };
                                        readonly args: {
                                            readonly type: "object";
                                            readonly required: readonly ["types", "directions"];
                                            readonly properties: {
                                                readonly types: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly const: "LOADCURVE";
                                                    };
                                                };
                                                readonly directions: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly enum: readonly ["CONSUMPTION", "INJECTION"];
                                                    };
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                }];
                            };
                        };
                        readonly purposes: {
                            readonly type: "array";
                            readonly items: {
                                readonly anyOf: readonly [{
                                    readonly enum: readonly ["SOLAR_INSTALLATION_SIZING", "DEMAND_RESPONSE", "ENERGY_PERFORMANCE_STUDY"];
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["id"];
                                    readonly properties: {
                                        readonly id: {
                                            readonly enum: readonly ["SOLAR_INSTALLATION_SIZING", "DEMAND_RESPONSE", "ENERGY_PERFORMANCE_STUDY"];
                                        };
                                    };
                                    readonly additionalProperties: false;
                                }];
                            };
                        };
                    };
                    readonly additionalProperties: false;
                };
            };
            readonly consentDuration: {
                readonly anyOf: readonly [{
                    readonly const: "1 day";
                    readonly title: "1 day";
                }, {
                    readonly const: "2 days";
                    readonly title: "2 days";
                }, {
                    readonly const: "3 days";
                    readonly title: "3 days";
                }, {
                    readonly const: "4 days";
                    readonly title: "4 days";
                }, {
                    readonly const: "5 days";
                    readonly title: "5 days";
                }, {
                    readonly const: "6 days";
                    readonly title: "6 days";
                }, {
                    readonly const: "1 week";
                    readonly title: "1 week";
                }, {
                    readonly const: "2 weeks";
                    readonly title: "2 weeks";
                }, {
                    readonly const: "3 weeks";
                    readonly title: "3 weeks";
                }, {
                    readonly const: "4 weeks";
                    readonly title: "4 weeks";
                }, {
                    readonly const: "1 month";
                    readonly title: "1 month";
                }, {
                    readonly const: "2 months";
                    readonly title: "2 months";
                }, {
                    readonly const: "3 months";
                    readonly title: "3 months";
                }, {
                    readonly const: "4 months";
                    readonly title: "4 months";
                }, {
                    readonly const: "5 months";
                    readonly title: "5 months";
                }, {
                    readonly const: "6 months";
                    readonly title: "6 months";
                }, {
                    readonly const: "1 year";
                    readonly title: "1 year";
                }, {
                    readonly const: "2 years";
                    readonly title: "2 years";
                }, {
                    readonly const: "3 years";
                    readonly title: "3 years";
                }, {
                    readonly const: "4 years";
                    readonly title: "4 years";
                }, {
                    readonly const: "5 years";
                    readonly title: "5 years";
                }, {
                    readonly const: "6 years";
                    readonly title: "6 years";
                }, {
                    readonly const: "7 years";
                    readonly title: "7 years";
                }, {
                    readonly const: "8 years";
                    readonly title: "8 years";
                }, {
                    readonly const: "9 years";
                    readonly title: "9 years";
                }, {
                    readonly const: "10 years";
                    readonly title: "10 years";
                }, {
                    readonly const: "11 years";
                    readonly title: "11 years";
                }, {
                    readonly const: "12 years";
                    readonly title: "12 years";
                }, {
                    readonly const: "13 years";
                    readonly title: "13 years";
                }, {
                    readonly const: "14 years";
                    readonly title: "14 years";
                }, {
                    readonly const: "15 years";
                    readonly title: "15 years";
                }, {
                    readonly const: "16 years";
                    readonly title: "16 years";
                }, {
                    readonly const: "17 years";
                    readonly title: "17 years";
                }, {
                    readonly const: "18 years";
                    readonly title: "18 years";
                }, {
                    readonly const: "19 years";
                    readonly title: "19 years";
                }, {
                    readonly const: "20 years";
                    readonly title: "20 years";
                }];
            };
        };
        readonly additionalProperties: false;
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "switchgrid-test-env": {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Set to true to use the test environment. Asks will not be billed. And Orders will return test data.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-07/schema#";
            readonly type: "object";
            readonly required: readonly ["id", "createdAt", "status", "acceptedAt", "consentCollectionDetails", "createArgs", "addressCheckResults", "consentIds", "contracts"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "A UUID";
                    readonly format: "uuid";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "ISO 8601 date format";
                };
                readonly status: {
                    readonly anyOf: readonly [{
                        readonly const: "CREATED";
                        readonly title: "CREATED";
                    }, {
                        readonly const: "PENDING_ADDRESS_CHECK";
                        readonly title: "PENDING_ADDRESS_CHECK";
                    }, {
                        readonly const: "ADDRESS_CHECK_FAILED";
                        readonly title: "ADDRESS_CHECK_FAILED";
                    }, {
                        readonly const: "PREPARING_CONSENT_COLLECTION";
                        readonly title: "PREPARING_CONSENT_COLLECTION";
                    }, {
                        readonly const: "PENDING_USER_ACTION";
                        readonly title: "PENDING_USER_ACTION";
                    }, {
                        readonly const: "ACCEPTED";
                        readonly title: "ACCEPTED";
                    }];
                };
                readonly acceptedAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                        readonly format: "date-time";
                        readonly description: "ISO 8601 date format";
                    }, {
                        readonly type: "null";
                    }];
                };
                readonly consentCollectionDetails: {
                    readonly anyOf: readonly [{
                        readonly type: "object";
                        readonly required: readonly ["service", "userUrl"];
                        readonly properties: {
                            readonly service: {
                                readonly enum: readonly ["DOCUSEAL", "WEB_HOSTED"];
                            };
                            readonly userUrl: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                    readonly description: "The URL to the document that the user needs to sign.";
                                    readonly title: "string";
                                    readonly examples: readonly ["https://docuseal.co/s/x1uPBSwot114QM"];
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }, {
                                    readonly type: "string";
                                    readonly description: "The URL to the document that the user needs to sign.";
                                    readonly title: "string";
                                    readonly examples: readonly ["https://docuseal.co/s/x1uPBSwot114QM"];
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                        };
                        readonly additionalProperties: false;
                    }, {
                        readonly type: "null";
                    }];
                };
                readonly createArgs: {
                    readonly type: "object";
                    readonly required: readonly ["electricityContracts", "signer", "consentCollectionMedium", "scopesAndPurpose", "consentDuration"];
                    readonly properties: {
                        readonly electricityContracts: {
                            readonly type: "array";
                            readonly items: {
                                readonly anyOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["prm", "heldBy", "address"];
                                    readonly properties: {
                                        readonly prm: {
                                            readonly type: "string";
                                            readonly pattern: "^[0-9]{14}$";
                                            readonly examples: readonly ["00059461297239"];
                                        };
                                        readonly heldBy: {
                                            readonly anyOf: readonly [{
                                                readonly type: "object";
                                                readonly required: readonly ["genre", "firstName", "lastName"];
                                                readonly properties: {
                                                    readonly genre: {
                                                        readonly enum: readonly ["M", "F"];
                                                    };
                                                    readonly firstName: {
                                                        readonly type: "string";
                                                        readonly description: "a string";
                                                        readonly title: "string";
                                                    };
                                                    readonly lastName: {
                                                        readonly type: "string";
                                                        readonly description: "a string";
                                                        readonly title: "string";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["name", "siret"];
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly description: "a string";
                                                        readonly title: "string";
                                                    };
                                                    readonly siret: {
                                                        readonly type: "string";
                                                        readonly description: "a string";
                                                        readonly title: "string";
                                                    };
                                                    readonly otherNames: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                            readonly description: "a string";
                                                            readonly title: "string";
                                                        };
                                                        readonly description: "Other names of the company. Max 2 names.";
                                                        readonly maxItems: 2;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            }];
                                            readonly description: "The person or company that holds the contract";
                                        };
                                        readonly address: {
                                            readonly type: "object";
                                            readonly required: readonly ["street", "postalCode", "city", "country"];
                                            readonly properties: {
                                                readonly street: {
                                                    readonly type: "string";
                                                    readonly description: "a string";
                                                    readonly title: "string";
                                                };
                                                readonly postalCode: {
                                                    readonly type: "string";
                                                    readonly description: "a string";
                                                    readonly title: "string";
                                                };
                                                readonly city: {
                                                    readonly type: "string";
                                                    readonly description: "a string";
                                                    readonly title: "string";
                                                };
                                                readonly country: {
                                                    readonly type: "string";
                                                    readonly description: "a string";
                                                    readonly title: "string";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                            readonly description: "The address where the electricity is consumed";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }, {
                                    readonly type: "string";
                                    readonly description: "The identifier of an electricity contract, that comes from the endpoint GET /search_contract";
                                    readonly format: "uuid";
                                }];
                            };
                        };
                        readonly signer: {
                            readonly type: "object";
                            readonly required: readonly ["lastName", "firstName", "phone", "genre", "email"];
                            readonly properties: {
                                readonly lastName: {
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                };
                                readonly firstName: {
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                };
                                readonly phone: {
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                };
                                readonly genre: {
                                    readonly enum: readonly ["M", "F"];
                                };
                                readonly email: {
                                    readonly identifier: "Email";
                                    readonly description: "an email";
                                    readonly type: "string";
                                    readonly examples: readonly ["user@domain.com"];
                                };
                            };
                            readonly additionalProperties: false;
                            readonly description: "The person signing the Consent request";
                            readonly $schema: "http://json-schema.org/draft-07/schema#";
                        };
                        readonly consentCollectionMedium: {
                            readonly anyOf: readonly [{
                                readonly type: "object";
                                readonly required: readonly ["service"];
                                readonly properties: {
                                    readonly service: {
                                        readonly const: "DOCUSEAL";
                                    };
                                };
                                readonly additionalProperties: false;
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["service"];
                                readonly properties: {
                                    readonly service: {
                                        readonly const: "WEB_HOSTED";
                                    };
                                };
                                readonly additionalProperties: false;
                            }];
                            readonly $schema: "http://json-schema.org/draft-07/schema#";
                        };
                        readonly options: {
                            readonly type: "object";
                            readonly required: readonly [];
                            readonly properties: {
                                readonly skipAddressCheck: {
                                    readonly type: "boolean";
                                    readonly description: "a boolean";
                                    readonly title: "boolean";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly scopesAndPurpose: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["scopes", "purposes"];
                                readonly properties: {
                                    readonly scopes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly anyOf: readonly [{
                                                readonly anyOf: readonly [{
                                                    readonly type: "object";
                                                    readonly required: readonly ["service", "id"];
                                                    readonly properties: {
                                                        readonly service: {
                                                            readonly const: "ENEDIS_RAW_API";
                                                        };
                                                        readonly id: {
                                                            readonly const: "DETAILS_CONTRACTUELS";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                }, {
                                                    readonly type: "object";
                                                    readonly required: readonly ["service", "id", "args"];
                                                    readonly properties: {
                                                        readonly service: {
                                                            readonly const: "ENEDIS_RAW_API";
                                                        };
                                                        readonly id: {
                                                            readonly const: "CONSUMPTION_DATA";
                                                        };
                                                        readonly args: {
                                                            readonly type: "object";
                                                            readonly required: readonly ["types", "directions"];
                                                            readonly properties: {
                                                                readonly types: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly enum: readonly ["CDC", "PMAX", "IDX", "ENERGIE"];
                                                                    };
                                                                };
                                                                readonly directions: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                                                                    };
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                }];
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["id", "args"];
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly const: "ELECTRICITY_TIMESERIES";
                                                    };
                                                    readonly args: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["types", "directions"];
                                                        readonly properties: {
                                                            readonly types: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly const: "LOADCURVE";
                                                                };
                                                            };
                                                            readonly directions: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly enum: readonly ["CONSUMPTION", "INJECTION"];
                                                                };
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            }];
                                        };
                                    };
                                    readonly purposes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly anyOf: readonly [{
                                                readonly enum: readonly ["SOLAR_INSTALLATION_SIZING", "DEMAND_RESPONSE", "ENERGY_PERFORMANCE_STUDY"];
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["id"];
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly enum: readonly ["SOLAR_INSTALLATION_SIZING", "DEMAND_RESPONSE", "ENERGY_PERFORMANCE_STUDY"];
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            }];
                                        };
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly consentDuration: {
                            readonly anyOf: readonly [{
                                readonly const: "1 day";
                                readonly title: "1 day";
                            }, {
                                readonly const: "2 days";
                                readonly title: "2 days";
                            }, {
                                readonly const: "3 days";
                                readonly title: "3 days";
                            }, {
                                readonly const: "4 days";
                                readonly title: "4 days";
                            }, {
                                readonly const: "5 days";
                                readonly title: "5 days";
                            }, {
                                readonly const: "6 days";
                                readonly title: "6 days";
                            }, {
                                readonly const: "1 week";
                                readonly title: "1 week";
                            }, {
                                readonly const: "2 weeks";
                                readonly title: "2 weeks";
                            }, {
                                readonly const: "3 weeks";
                                readonly title: "3 weeks";
                            }, {
                                readonly const: "4 weeks";
                                readonly title: "4 weeks";
                            }, {
                                readonly const: "1 month";
                                readonly title: "1 month";
                            }, {
                                readonly const: "2 months";
                                readonly title: "2 months";
                            }, {
                                readonly const: "3 months";
                                readonly title: "3 months";
                            }, {
                                readonly const: "4 months";
                                readonly title: "4 months";
                            }, {
                                readonly const: "5 months";
                                readonly title: "5 months";
                            }, {
                                readonly const: "6 months";
                                readonly title: "6 months";
                            }, {
                                readonly const: "1 year";
                                readonly title: "1 year";
                            }, {
                                readonly const: "2 years";
                                readonly title: "2 years";
                            }, {
                                readonly const: "3 years";
                                readonly title: "3 years";
                            }, {
                                readonly const: "4 years";
                                readonly title: "4 years";
                            }, {
                                readonly const: "5 years";
                                readonly title: "5 years";
                            }, {
                                readonly const: "6 years";
                                readonly title: "6 years";
                            }, {
                                readonly const: "7 years";
                                readonly title: "7 years";
                            }, {
                                readonly const: "8 years";
                                readonly title: "8 years";
                            }, {
                                readonly const: "9 years";
                                readonly title: "9 years";
                            }, {
                                readonly const: "10 years";
                                readonly title: "10 years";
                            }, {
                                readonly const: "11 years";
                                readonly title: "11 years";
                            }, {
                                readonly const: "12 years";
                                readonly title: "12 years";
                            }, {
                                readonly const: "13 years";
                                readonly title: "13 years";
                            }, {
                                readonly const: "14 years";
                                readonly title: "14 years";
                            }, {
                                readonly const: "15 years";
                                readonly title: "15 years";
                            }, {
                                readonly const: "16 years";
                                readonly title: "16 years";
                            }, {
                                readonly const: "17 years";
                                readonly title: "17 years";
                            }, {
                                readonly const: "18 years";
                                readonly title: "18 years";
                            }, {
                                readonly const: "19 years";
                                readonly title: "19 years";
                            }, {
                                readonly const: "20 years";
                                readonly title: "20 years";
                            }];
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly __experimentalAddressChecksResults: {
                    readonly type: "object";
                    readonly required: readonly [];
                    readonly properties: {};
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly required: readonly ["status"];
                        readonly properties: {
                            readonly status: {
                                readonly enum: readonly ["SUCCESS", "FAILURE"];
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly addressCheckResults: {
                    readonly type: "object";
                    readonly required: readonly [];
                    readonly properties: {};
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly required: readonly ["status"];
                        readonly properties: {
                            readonly status: {
                                readonly enum: readonly ["SUCCESS", "FAILURE"];
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly consentIds: {
                    readonly type: "object";
                    readonly required: readonly [];
                    readonly properties: {};
                    readonly additionalProperties: {
                        readonly type: "string";
                        readonly description: "A UUID";
                        readonly format: "uuid";
                    };
                };
                readonly contracts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["nomClientFinalOuDenominationSociale", "id", "prm", "categorieClientFinalCode", "adresseInstallationNormalisee"];
                        readonly properties: {
                            readonly nomClientFinalOuDenominationSociale: {
                                readonly type: "string";
                                readonly description: "a string";
                                readonly title: "string";
                                readonly examples: readonly ["DUPONT Marie", "SARL DUPONT ET FILS"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "A UUID";
                                readonly format: "uuid";
                            };
                            readonly prm: {
                                readonly type: "string";
                                readonly pattern: "^[0-9]{14}$";
                                readonly examples: readonly ["00059461297239"];
                            };
                            readonly categorieClientFinalCode: {
                                readonly enum: readonly ["RES", "PRO"];
                            };
                            readonly adresseInstallationNormalisee: {
                                readonly type: "object";
                                readonly required: readonly [];
                                readonly properties: {
                                    readonly ligne1: {
                                        readonly type: "string";
                                        readonly description: "Ligne 1 de l’adresse postale.\n  Cette ligne identifie le destinataire.\n  Cette donnée ne sera pas renseignée car\n  redondante avec la donnée « Nom ou\n  dénomination sociale du client »\n  ";
                                        readonly title: "Ligne 1 de l’adresse postale.";
                                    };
                                    readonly ligne2: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 2 de l’adresse postale.\n  Cette ligne identifie généralement le\n  complément d’identification du destinataire ou\n  du point de remise (escalier, étage,\n  appartement, boîte aux lettres…).\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["03 D", "COLLINE DE VELAUX VI", "A"];
                                    };
                                    readonly ligne3: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 3 de l’adresse postale.\n  Cette ligne identifie généralement le\n  complément d’identification du point\n  géographique (entrée, tour, immeuble,\n  bâtiment, résidence, zone industrielle…).\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["QUARTIER LES CAIRADES", "VILLA CHANTE LA MER", "VILLA B LOTISSEMENT ACHBARI", "QUARTIER LE PEGOUY", "CHEMIN DE LA CHABOTT"];
                                    };
                                    readonly ligne4: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 4 de l’adresse postale.\n  Cette ligne identifie le numéro et le libellé de la\n  voie.\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["70 ALLEE DU BOIS", "11 IMPASSE DES SENTEURS", "27 CHEMIN DES COUSTELLINES"];
                                    };
                                    readonly ligne5: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 5 de l’adresse postale.\n  Cette ligne identifie généralement :\n  - le lieu-dit ou le service particulier de\n  distribution dans le cas d’un client\n  résidentiel,\n  - les mentions spéciales de distribution et\n  commune d’implantation de l’entreprise (si\n  différente du bureau distributeur CEDEX)\n  dans le cas d’un client professionnel.\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["HELLEMMES LILLE", "BP 4"];
                                    };
                                    readonly ligne6: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 6 de l’adresse postale.\n  Cette ligne identifie :\n  - le code postal et la localité de destination\n  dans le cas d’un client résidentiel,\n  - le code postal et bureau distributeur ou\n  code cedex et bureau distributeur cedex\n  dans le cas d’un client professionnel.\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["84190 BEAUMES DE VENISE"];
                                    };
                                    readonly ligne7: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 7 de l’adresse postale.\n  Cette ligne identifie le pays.\n  Cette donnée ne sera pas renseignée.\n        ";
                                        readonly title: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly additionalProperties: false;
                        readonly $schema: "http://json-schema.org/draft-07/schema#";
                    };
                };
            };
            readonly additionalProperties: false;
        };
    };
};
declare const GetAsk: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly askId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["askId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-07/schema#";
            readonly type: "object";
            readonly required: readonly ["id", "createdAt", "status", "acceptedAt", "consentCollectionDetails", "createArgs", "addressCheckResults", "consentIds", "contracts"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "A UUID";
                    readonly format: "uuid";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "ISO 8601 date format";
                };
                readonly status: {
                    readonly anyOf: readonly [{
                        readonly const: "CREATED";
                        readonly title: "CREATED";
                    }, {
                        readonly const: "PENDING_ADDRESS_CHECK";
                        readonly title: "PENDING_ADDRESS_CHECK";
                    }, {
                        readonly const: "ADDRESS_CHECK_FAILED";
                        readonly title: "ADDRESS_CHECK_FAILED";
                    }, {
                        readonly const: "PREPARING_CONSENT_COLLECTION";
                        readonly title: "PREPARING_CONSENT_COLLECTION";
                    }, {
                        readonly const: "PENDING_USER_ACTION";
                        readonly title: "PENDING_USER_ACTION";
                    }, {
                        readonly const: "ACCEPTED";
                        readonly title: "ACCEPTED";
                    }];
                };
                readonly acceptedAt: {
                    readonly anyOf: readonly [{
                        readonly type: "string";
                        readonly format: "date-time";
                        readonly description: "ISO 8601 date format";
                    }, {
                        readonly type: "null";
                    }];
                };
                readonly consentCollectionDetails: {
                    readonly anyOf: readonly [{
                        readonly type: "object";
                        readonly required: readonly ["service", "userUrl"];
                        readonly properties: {
                            readonly service: {
                                readonly enum: readonly ["DOCUSEAL", "WEB_HOSTED"];
                            };
                            readonly userUrl: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                    readonly description: "The URL to the document that the user needs to sign.";
                                    readonly title: "string";
                                    readonly examples: readonly ["https://docuseal.co/s/x1uPBSwot114QM"];
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }, {
                                    readonly type: "string";
                                    readonly description: "The URL to the document that the user needs to sign.";
                                    readonly title: "string";
                                    readonly examples: readonly ["https://docuseal.co/s/x1uPBSwot114QM"];
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                        };
                        readonly additionalProperties: false;
                    }, {
                        readonly type: "null";
                    }];
                };
                readonly createArgs: {
                    readonly type: "object";
                    readonly required: readonly ["electricityContracts", "signer", "consentCollectionMedium", "scopesAndPurpose", "consentDuration"];
                    readonly properties: {
                        readonly electricityContracts: {
                            readonly type: "array";
                            readonly items: {
                                readonly anyOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["prm", "heldBy", "address"];
                                    readonly properties: {
                                        readonly prm: {
                                            readonly type: "string";
                                            readonly pattern: "^[0-9]{14}$";
                                            readonly examples: readonly ["00059461297239"];
                                        };
                                        readonly heldBy: {
                                            readonly anyOf: readonly [{
                                                readonly type: "object";
                                                readonly required: readonly ["genre", "firstName", "lastName"];
                                                readonly properties: {
                                                    readonly genre: {
                                                        readonly enum: readonly ["M", "F"];
                                                    };
                                                    readonly firstName: {
                                                        readonly type: "string";
                                                        readonly description: "a string";
                                                        readonly title: "string";
                                                    };
                                                    readonly lastName: {
                                                        readonly type: "string";
                                                        readonly description: "a string";
                                                        readonly title: "string";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["name", "siret"];
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly description: "a string";
                                                        readonly title: "string";
                                                    };
                                                    readonly siret: {
                                                        readonly type: "string";
                                                        readonly description: "a string";
                                                        readonly title: "string";
                                                    };
                                                    readonly otherNames: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "string";
                                                            readonly description: "a string";
                                                            readonly title: "string";
                                                        };
                                                        readonly description: "Other names of the company. Max 2 names.";
                                                        readonly maxItems: 2;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            }];
                                            readonly description: "The person or company that holds the contract";
                                        };
                                        readonly address: {
                                            readonly type: "object";
                                            readonly required: readonly ["street", "postalCode", "city", "country"];
                                            readonly properties: {
                                                readonly street: {
                                                    readonly type: "string";
                                                    readonly description: "a string";
                                                    readonly title: "string";
                                                };
                                                readonly postalCode: {
                                                    readonly type: "string";
                                                    readonly description: "a string";
                                                    readonly title: "string";
                                                };
                                                readonly city: {
                                                    readonly type: "string";
                                                    readonly description: "a string";
                                                    readonly title: "string";
                                                };
                                                readonly country: {
                                                    readonly type: "string";
                                                    readonly description: "a string";
                                                    readonly title: "string";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                            readonly description: "The address where the electricity is consumed";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }, {
                                    readonly type: "string";
                                    readonly description: "The identifier of an electricity contract, that comes from the endpoint GET /search_contract";
                                    readonly format: "uuid";
                                }];
                            };
                        };
                        readonly signer: {
                            readonly type: "object";
                            readonly required: readonly ["lastName", "firstName", "phone", "genre", "email"];
                            readonly properties: {
                                readonly lastName: {
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                };
                                readonly firstName: {
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                };
                                readonly phone: {
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                };
                                readonly genre: {
                                    readonly enum: readonly ["M", "F"];
                                };
                                readonly email: {
                                    readonly identifier: "Email";
                                    readonly description: "an email";
                                    readonly type: "string";
                                    readonly examples: readonly ["user@domain.com"];
                                };
                            };
                            readonly additionalProperties: false;
                            readonly description: "The person signing the Consent request";
                            readonly $schema: "http://json-schema.org/draft-07/schema#";
                        };
                        readonly consentCollectionMedium: {
                            readonly anyOf: readonly [{
                                readonly type: "object";
                                readonly required: readonly ["service"];
                                readonly properties: {
                                    readonly service: {
                                        readonly const: "DOCUSEAL";
                                    };
                                };
                                readonly additionalProperties: false;
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["service"];
                                readonly properties: {
                                    readonly service: {
                                        readonly const: "WEB_HOSTED";
                                    };
                                };
                                readonly additionalProperties: false;
                            }];
                            readonly $schema: "http://json-schema.org/draft-07/schema#";
                        };
                        readonly options: {
                            readonly type: "object";
                            readonly required: readonly [];
                            readonly properties: {
                                readonly skipAddressCheck: {
                                    readonly type: "boolean";
                                    readonly description: "a boolean";
                                    readonly title: "boolean";
                                };
                            };
                            readonly additionalProperties: false;
                        };
                        readonly scopesAndPurpose: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["scopes", "purposes"];
                                readonly properties: {
                                    readonly scopes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly anyOf: readonly [{
                                                readonly anyOf: readonly [{
                                                    readonly type: "object";
                                                    readonly required: readonly ["service", "id"];
                                                    readonly properties: {
                                                        readonly service: {
                                                            readonly const: "ENEDIS_RAW_API";
                                                        };
                                                        readonly id: {
                                                            readonly const: "DETAILS_CONTRACTUELS";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                }, {
                                                    readonly type: "object";
                                                    readonly required: readonly ["service", "id", "args"];
                                                    readonly properties: {
                                                        readonly service: {
                                                            readonly const: "ENEDIS_RAW_API";
                                                        };
                                                        readonly id: {
                                                            readonly const: "CONSUMPTION_DATA";
                                                        };
                                                        readonly args: {
                                                            readonly type: "object";
                                                            readonly required: readonly ["types", "directions"];
                                                            readonly properties: {
                                                                readonly types: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly enum: readonly ["CDC", "PMAX", "IDX", "ENERGIE"];
                                                                    };
                                                                };
                                                                readonly directions: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                                                                    };
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                }];
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["id", "args"];
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly const: "ELECTRICITY_TIMESERIES";
                                                    };
                                                    readonly args: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["types", "directions"];
                                                        readonly properties: {
                                                            readonly types: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly const: "LOADCURVE";
                                                                };
                                                            };
                                                            readonly directions: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly enum: readonly ["CONSUMPTION", "INJECTION"];
                                                                };
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            }];
                                        };
                                    };
                                    readonly purposes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly anyOf: readonly [{
                                                readonly enum: readonly ["SOLAR_INSTALLATION_SIZING", "DEMAND_RESPONSE", "ENERGY_PERFORMANCE_STUDY"];
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["id"];
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly enum: readonly ["SOLAR_INSTALLATION_SIZING", "DEMAND_RESPONSE", "ENERGY_PERFORMANCE_STUDY"];
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            }];
                                        };
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly consentDuration: {
                            readonly anyOf: readonly [{
                                readonly const: "1 day";
                                readonly title: "1 day";
                            }, {
                                readonly const: "2 days";
                                readonly title: "2 days";
                            }, {
                                readonly const: "3 days";
                                readonly title: "3 days";
                            }, {
                                readonly const: "4 days";
                                readonly title: "4 days";
                            }, {
                                readonly const: "5 days";
                                readonly title: "5 days";
                            }, {
                                readonly const: "6 days";
                                readonly title: "6 days";
                            }, {
                                readonly const: "1 week";
                                readonly title: "1 week";
                            }, {
                                readonly const: "2 weeks";
                                readonly title: "2 weeks";
                            }, {
                                readonly const: "3 weeks";
                                readonly title: "3 weeks";
                            }, {
                                readonly const: "4 weeks";
                                readonly title: "4 weeks";
                            }, {
                                readonly const: "1 month";
                                readonly title: "1 month";
                            }, {
                                readonly const: "2 months";
                                readonly title: "2 months";
                            }, {
                                readonly const: "3 months";
                                readonly title: "3 months";
                            }, {
                                readonly const: "4 months";
                                readonly title: "4 months";
                            }, {
                                readonly const: "5 months";
                                readonly title: "5 months";
                            }, {
                                readonly const: "6 months";
                                readonly title: "6 months";
                            }, {
                                readonly const: "1 year";
                                readonly title: "1 year";
                            }, {
                                readonly const: "2 years";
                                readonly title: "2 years";
                            }, {
                                readonly const: "3 years";
                                readonly title: "3 years";
                            }, {
                                readonly const: "4 years";
                                readonly title: "4 years";
                            }, {
                                readonly const: "5 years";
                                readonly title: "5 years";
                            }, {
                                readonly const: "6 years";
                                readonly title: "6 years";
                            }, {
                                readonly const: "7 years";
                                readonly title: "7 years";
                            }, {
                                readonly const: "8 years";
                                readonly title: "8 years";
                            }, {
                                readonly const: "9 years";
                                readonly title: "9 years";
                            }, {
                                readonly const: "10 years";
                                readonly title: "10 years";
                            }, {
                                readonly const: "11 years";
                                readonly title: "11 years";
                            }, {
                                readonly const: "12 years";
                                readonly title: "12 years";
                            }, {
                                readonly const: "13 years";
                                readonly title: "13 years";
                            }, {
                                readonly const: "14 years";
                                readonly title: "14 years";
                            }, {
                                readonly const: "15 years";
                                readonly title: "15 years";
                            }, {
                                readonly const: "16 years";
                                readonly title: "16 years";
                            }, {
                                readonly const: "17 years";
                                readonly title: "17 years";
                            }, {
                                readonly const: "18 years";
                                readonly title: "18 years";
                            }, {
                                readonly const: "19 years";
                                readonly title: "19 years";
                            }, {
                                readonly const: "20 years";
                                readonly title: "20 years";
                            }];
                        };
                    };
                    readonly additionalProperties: false;
                };
                readonly __experimentalAddressChecksResults: {
                    readonly type: "object";
                    readonly required: readonly [];
                    readonly properties: {};
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly required: readonly ["status"];
                        readonly properties: {
                            readonly status: {
                                readonly enum: readonly ["SUCCESS", "FAILURE"];
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly addressCheckResults: {
                    readonly type: "object";
                    readonly required: readonly [];
                    readonly properties: {};
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly required: readonly ["status"];
                        readonly properties: {
                            readonly status: {
                                readonly enum: readonly ["SUCCESS", "FAILURE"];
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
                readonly consentIds: {
                    readonly type: "object";
                    readonly required: readonly [];
                    readonly properties: {};
                    readonly additionalProperties: {
                        readonly type: "string";
                        readonly description: "A UUID";
                        readonly format: "uuid";
                    };
                };
                readonly contracts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["nomClientFinalOuDenominationSociale", "id", "prm", "categorieClientFinalCode", "adresseInstallationNormalisee"];
                        readonly properties: {
                            readonly nomClientFinalOuDenominationSociale: {
                                readonly type: "string";
                                readonly description: "a string";
                                readonly title: "string";
                                readonly examples: readonly ["DUPONT Marie", "SARL DUPONT ET FILS"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "A UUID";
                                readonly format: "uuid";
                            };
                            readonly prm: {
                                readonly type: "string";
                                readonly pattern: "^[0-9]{14}$";
                                readonly examples: readonly ["00059461297239"];
                            };
                            readonly categorieClientFinalCode: {
                                readonly enum: readonly ["RES", "PRO"];
                            };
                            readonly adresseInstallationNormalisee: {
                                readonly type: "object";
                                readonly required: readonly [];
                                readonly properties: {
                                    readonly ligne1: {
                                        readonly type: "string";
                                        readonly description: "Ligne 1 de l’adresse postale.\n  Cette ligne identifie le destinataire.\n  Cette donnée ne sera pas renseignée car\n  redondante avec la donnée « Nom ou\n  dénomination sociale du client »\n  ";
                                        readonly title: "Ligne 1 de l’adresse postale.";
                                    };
                                    readonly ligne2: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 2 de l’adresse postale.\n  Cette ligne identifie généralement le\n  complément d’identification du destinataire ou\n  du point de remise (escalier, étage,\n  appartement, boîte aux lettres…).\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["03 D", "COLLINE DE VELAUX VI", "A"];
                                    };
                                    readonly ligne3: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 3 de l’adresse postale.\n  Cette ligne identifie généralement le\n  complément d’identification du point\n  géographique (entrée, tour, immeuble,\n  bâtiment, résidence, zone industrielle…).\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["QUARTIER LES CAIRADES", "VILLA CHANTE LA MER", "VILLA B LOTISSEMENT ACHBARI", "QUARTIER LE PEGOUY", "CHEMIN DE LA CHABOTT"];
                                    };
                                    readonly ligne4: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 4 de l’adresse postale.\n  Cette ligne identifie le numéro et le libellé de la\n  voie.\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["70 ALLEE DU BOIS", "11 IMPASSE DES SENTEURS", "27 CHEMIN DES COUSTELLINES"];
                                    };
                                    readonly ligne5: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 5 de l’adresse postale.\n  Cette ligne identifie généralement :\n  - le lieu-dit ou le service particulier de\n  distribution dans le cas d’un client\n  résidentiel,\n  - les mentions spéciales de distribution et\n  commune d’implantation de l’entreprise (si\n  différente du bureau distributeur CEDEX)\n  dans le cas d’un client professionnel.\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["HELLEMMES LILLE", "BP 4"];
                                    };
                                    readonly ligne6: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 6 de l’adresse postale.\n  Cette ligne identifie :\n  - le code postal et la localité de destination\n  dans le cas d’un client résidentiel,\n  - le code postal et bureau distributeur ou\n  code cedex et bureau distributeur cedex\n  dans le cas d’un client professionnel.\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["84190 BEAUMES DE VENISE"];
                                    };
                                    readonly ligne7: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 7 de l’adresse postale.\n  Cette ligne identifie le pays.\n  Cette donnée ne sera pas renseignée.\n        ";
                                        readonly title: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly additionalProperties: false;
                        readonly $schema: "http://json-schema.org/draft-07/schema#";
                    };
                };
            };
            readonly additionalProperties: false;
        };
    };
};
declare const GetAskProof: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly askId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["askId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "string";
            readonly format: "binary";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetAsks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly prm: {
                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                    readonly type: "string";
                    readonly examples: readonly ["", "00056184972446", "00027046521843,00077145296439", "!00069098505221"];
                    readonly description: "comma-separated list of prms, Use '!' to exclude prms.";
                };
                readonly status: {
                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                    readonly type: "string";
                    readonly examples: readonly ["", "ACCEPTED", "!ACCEPTED", "PENDING_USER_ACTION,ACCEPTED"];
                    readonly description: "comma-separated list of statuses, example: 'ACCEPTED' '!ACCEPTED,!PENDING_USER_ACTION'. Use '!' to exclude statuses. If multiple statuses are provided, the ask must match at least one of them, but not match any of the excluded statuses.";
                };
                readonly skip: {
                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly default: 0;
                };
                readonly limit: {
                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                    readonly type: "integer";
                    readonly maximum: 100;
                    readonly default: 10;
                };
                readonly orderBy: {
                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                    readonly type: "string";
                    readonly default: "createdAt:asc";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "switchgrid-test-env": {
                    readonly type: "boolean";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Set to true to see Asks from the testEnvironment.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-07/schema#";
            readonly type: "object";
            readonly required: readonly ["skip", "limit", "totalItemsCount", "returnedItemsCount", "items"];
            readonly properties: {
                readonly skip: {
                    readonly type: "number";
                    readonly description: "a number";
                    readonly title: "number";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "a number";
                    readonly title: "number";
                };
                readonly totalItemsCount: {
                    readonly type: "number";
                    readonly description: "a number";
                    readonly title: "number";
                };
                readonly returnedItemsCount: {
                    readonly type: "number";
                    readonly description: "a number";
                    readonly title: "number";
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["id", "createdAt", "status", "acceptedAt", "consentCollectionDetails", "createArgs", "addressCheckResults", "consentIds", "contracts"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "A UUID";
                                readonly format: "uuid";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly status: {
                                readonly anyOf: readonly [{
                                    readonly const: "CREATED";
                                    readonly title: "CREATED";
                                }, {
                                    readonly const: "PENDING_ADDRESS_CHECK";
                                    readonly title: "PENDING_ADDRESS_CHECK";
                                }, {
                                    readonly const: "ADDRESS_CHECK_FAILED";
                                    readonly title: "ADDRESS_CHECK_FAILED";
                                }, {
                                    readonly const: "PREPARING_CONSENT_COLLECTION";
                                    readonly title: "PREPARING_CONSENT_COLLECTION";
                                }, {
                                    readonly const: "PENDING_USER_ACTION";
                                    readonly title: "PENDING_USER_ACTION";
                                }, {
                                    readonly const: "ACCEPTED";
                                    readonly title: "ACCEPTED";
                                }];
                            };
                            readonly acceptedAt: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly description: "ISO 8601 date format";
                                }, {
                                    readonly type: "null";
                                }];
                            };
                            readonly consentCollectionDetails: {
                                readonly anyOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["service", "userUrl"];
                                    readonly properties: {
                                        readonly service: {
                                            readonly enum: readonly ["DOCUSEAL", "WEB_HOSTED"];
                                        };
                                        readonly userUrl: {
                                            readonly anyOf: readonly [{
                                                readonly type: "string";
                                                readonly description: "The URL to the document that the user needs to sign.";
                                                readonly title: "string";
                                                readonly examples: readonly ["https://docuseal.co/s/x1uPBSwot114QM"];
                                                readonly $schema: "http://json-schema.org/draft-07/schema#";
                                            }, {
                                                readonly type: "string";
                                                readonly description: "The URL to the document that the user needs to sign.";
                                                readonly title: "string";
                                                readonly examples: readonly ["https://docuseal.co/s/x1uPBSwot114QM"];
                                                readonly $schema: "http://json-schema.org/draft-07/schema#";
                                            }];
                                        };
                                    };
                                    readonly additionalProperties: false;
                                }, {
                                    readonly type: "null";
                                }];
                            };
                            readonly createArgs: {
                                readonly type: "object";
                                readonly required: readonly ["electricityContracts", "signer", "consentCollectionMedium", "scopesAndPurpose", "consentDuration"];
                                readonly properties: {
                                    readonly electricityContracts: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly anyOf: readonly [{
                                                readonly type: "object";
                                                readonly required: readonly ["prm", "heldBy", "address"];
                                                readonly properties: {
                                                    readonly prm: {
                                                        readonly type: "string";
                                                        readonly pattern: "^[0-9]{14}$";
                                                        readonly examples: readonly ["00059461297239"];
                                                    };
                                                    readonly heldBy: {
                                                        readonly anyOf: readonly [{
                                                            readonly type: "object";
                                                            readonly required: readonly ["genre", "firstName", "lastName"];
                                                            readonly properties: {
                                                                readonly genre: {
                                                                    readonly enum: readonly ["M", "F"];
                                                                };
                                                                readonly firstName: {
                                                                    readonly type: "string";
                                                                    readonly description: "a string";
                                                                    readonly title: "string";
                                                                };
                                                                readonly lastName: {
                                                                    readonly type: "string";
                                                                    readonly description: "a string";
                                                                    readonly title: "string";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        }, {
                                                            readonly type: "object";
                                                            readonly required: readonly ["name", "siret"];
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly description: "a string";
                                                                    readonly title: "string";
                                                                };
                                                                readonly siret: {
                                                                    readonly type: "string";
                                                                    readonly description: "a string";
                                                                    readonly title: "string";
                                                                };
                                                                readonly otherNames: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                        readonly description: "a string";
                                                                        readonly title: "string";
                                                                    };
                                                                    readonly description: "Other names of the company. Max 2 names.";
                                                                    readonly maxItems: 2;
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        }];
                                                        readonly description: "The person or company that holds the contract";
                                                    };
                                                    readonly address: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["street", "postalCode", "city", "country"];
                                                        readonly properties: {
                                                            readonly street: {
                                                                readonly type: "string";
                                                                readonly description: "a string";
                                                                readonly title: "string";
                                                            };
                                                            readonly postalCode: {
                                                                readonly type: "string";
                                                                readonly description: "a string";
                                                                readonly title: "string";
                                                            };
                                                            readonly city: {
                                                                readonly type: "string";
                                                                readonly description: "a string";
                                                                readonly title: "string";
                                                            };
                                                            readonly country: {
                                                                readonly type: "string";
                                                                readonly description: "a string";
                                                                readonly title: "string";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                        readonly description: "The address where the electricity is consumed";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                                readonly $schema: "http://json-schema.org/draft-07/schema#";
                                            }, {
                                                readonly type: "string";
                                                readonly description: "The identifier of an electricity contract, that comes from the endpoint GET /search_contract";
                                                readonly format: "uuid";
                                            }];
                                        };
                                    };
                                    readonly signer: {
                                        readonly type: "object";
                                        readonly required: readonly ["lastName", "firstName", "phone", "genre", "email"];
                                        readonly properties: {
                                            readonly lastName: {
                                                readonly type: "string";
                                                readonly description: "a string";
                                                readonly title: "string";
                                            };
                                            readonly firstName: {
                                                readonly type: "string";
                                                readonly description: "a string";
                                                readonly title: "string";
                                            };
                                            readonly phone: {
                                                readonly type: "string";
                                                readonly description: "a string";
                                                readonly title: "string";
                                            };
                                            readonly genre: {
                                                readonly enum: readonly ["M", "F"];
                                            };
                                            readonly email: {
                                                readonly identifier: "Email";
                                                readonly description: "an email";
                                                readonly type: "string";
                                                readonly examples: readonly ["user@domain.com"];
                                            };
                                        };
                                        readonly additionalProperties: false;
                                        readonly description: "The person signing the Consent request";
                                        readonly $schema: "http://json-schema.org/draft-07/schema#";
                                    };
                                    readonly consentCollectionMedium: {
                                        readonly anyOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["service"];
                                            readonly properties: {
                                                readonly service: {
                                                    readonly const: "DOCUSEAL";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["service"];
                                            readonly properties: {
                                                readonly service: {
                                                    readonly const: "WEB_HOSTED";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        }];
                                        readonly $schema: "http://json-schema.org/draft-07/schema#";
                                    };
                                    readonly options: {
                                        readonly type: "object";
                                        readonly required: readonly [];
                                        readonly properties: {
                                            readonly skipAddressCheck: {
                                                readonly type: "boolean";
                                                readonly description: "a boolean";
                                                readonly title: "boolean";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly scopesAndPurpose: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["scopes", "purposes"];
                                            readonly properties: {
                                                readonly scopes: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly anyOf: readonly [{
                                                            readonly anyOf: readonly [{
                                                                readonly type: "object";
                                                                readonly required: readonly ["service", "id"];
                                                                readonly properties: {
                                                                    readonly service: {
                                                                        readonly const: "ENEDIS_RAW_API";
                                                                    };
                                                                    readonly id: {
                                                                        readonly const: "DETAILS_CONTRACTUELS";
                                                                    };
                                                                };
                                                                readonly additionalProperties: false;
                                                            }, {
                                                                readonly type: "object";
                                                                readonly required: readonly ["service", "id", "args"];
                                                                readonly properties: {
                                                                    readonly service: {
                                                                        readonly const: "ENEDIS_RAW_API";
                                                                    };
                                                                    readonly id: {
                                                                        readonly const: "CONSUMPTION_DATA";
                                                                    };
                                                                    readonly args: {
                                                                        readonly type: "object";
                                                                        readonly required: readonly ["types", "directions"];
                                                                        readonly properties: {
                                                                            readonly types: {
                                                                                readonly type: "array";
                                                                                readonly items: {
                                                                                    readonly enum: readonly ["CDC", "PMAX", "IDX", "ENERGIE"];
                                                                                };
                                                                            };
                                                                            readonly directions: {
                                                                                readonly type: "array";
                                                                                readonly items: {
                                                                                    readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                                                                                };
                                                                            };
                                                                        };
                                                                        readonly additionalProperties: false;
                                                                    };
                                                                };
                                                                readonly additionalProperties: false;
                                                            }];
                                                        }, {
                                                            readonly type: "object";
                                                            readonly required: readonly ["id", "args"];
                                                            readonly properties: {
                                                                readonly id: {
                                                                    readonly const: "ELECTRICITY_TIMESERIES";
                                                                };
                                                                readonly args: {
                                                                    readonly type: "object";
                                                                    readonly required: readonly ["types", "directions"];
                                                                    readonly properties: {
                                                                        readonly types: {
                                                                            readonly type: "array";
                                                                            readonly items: {
                                                                                readonly const: "LOADCURVE";
                                                                            };
                                                                        };
                                                                        readonly directions: {
                                                                            readonly type: "array";
                                                                            readonly items: {
                                                                                readonly enum: readonly ["CONSUMPTION", "INJECTION"];
                                                                            };
                                                                        };
                                                                    };
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        }];
                                                    };
                                                };
                                                readonly purposes: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly anyOf: readonly [{
                                                            readonly enum: readonly ["SOLAR_INSTALLATION_SIZING", "DEMAND_RESPONSE", "ENERGY_PERFORMANCE_STUDY"];
                                                        }, {
                                                            readonly type: "object";
                                                            readonly required: readonly ["id"];
                                                            readonly properties: {
                                                                readonly id: {
                                                                    readonly enum: readonly ["SOLAR_INSTALLATION_SIZING", "DEMAND_RESPONSE", "ENERGY_PERFORMANCE_STUDY"];
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        }];
                                                    };
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly consentDuration: {
                                        readonly anyOf: readonly [{
                                            readonly const: "1 day";
                                            readonly title: "1 day";
                                        }, {
                                            readonly const: "2 days";
                                            readonly title: "2 days";
                                        }, {
                                            readonly const: "3 days";
                                            readonly title: "3 days";
                                        }, {
                                            readonly const: "4 days";
                                            readonly title: "4 days";
                                        }, {
                                            readonly const: "5 days";
                                            readonly title: "5 days";
                                        }, {
                                            readonly const: "6 days";
                                            readonly title: "6 days";
                                        }, {
                                            readonly const: "1 week";
                                            readonly title: "1 week";
                                        }, {
                                            readonly const: "2 weeks";
                                            readonly title: "2 weeks";
                                        }, {
                                            readonly const: "3 weeks";
                                            readonly title: "3 weeks";
                                        }, {
                                            readonly const: "4 weeks";
                                            readonly title: "4 weeks";
                                        }, {
                                            readonly const: "1 month";
                                            readonly title: "1 month";
                                        }, {
                                            readonly const: "2 months";
                                            readonly title: "2 months";
                                        }, {
                                            readonly const: "3 months";
                                            readonly title: "3 months";
                                        }, {
                                            readonly const: "4 months";
                                            readonly title: "4 months";
                                        }, {
                                            readonly const: "5 months";
                                            readonly title: "5 months";
                                        }, {
                                            readonly const: "6 months";
                                            readonly title: "6 months";
                                        }, {
                                            readonly const: "1 year";
                                            readonly title: "1 year";
                                        }, {
                                            readonly const: "2 years";
                                            readonly title: "2 years";
                                        }, {
                                            readonly const: "3 years";
                                            readonly title: "3 years";
                                        }, {
                                            readonly const: "4 years";
                                            readonly title: "4 years";
                                        }, {
                                            readonly const: "5 years";
                                            readonly title: "5 years";
                                        }, {
                                            readonly const: "6 years";
                                            readonly title: "6 years";
                                        }, {
                                            readonly const: "7 years";
                                            readonly title: "7 years";
                                        }, {
                                            readonly const: "8 years";
                                            readonly title: "8 years";
                                        }, {
                                            readonly const: "9 years";
                                            readonly title: "9 years";
                                        }, {
                                            readonly const: "10 years";
                                            readonly title: "10 years";
                                        }, {
                                            readonly const: "11 years";
                                            readonly title: "11 years";
                                        }, {
                                            readonly const: "12 years";
                                            readonly title: "12 years";
                                        }, {
                                            readonly const: "13 years";
                                            readonly title: "13 years";
                                        }, {
                                            readonly const: "14 years";
                                            readonly title: "14 years";
                                        }, {
                                            readonly const: "15 years";
                                            readonly title: "15 years";
                                        }, {
                                            readonly const: "16 years";
                                            readonly title: "16 years";
                                        }, {
                                            readonly const: "17 years";
                                            readonly title: "17 years";
                                        }, {
                                            readonly const: "18 years";
                                            readonly title: "18 years";
                                        }, {
                                            readonly const: "19 years";
                                            readonly title: "19 years";
                                        }, {
                                            readonly const: "20 years";
                                            readonly title: "20 years";
                                        }];
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                            readonly __experimentalAddressChecksResults: {
                                readonly type: "object";
                                readonly required: readonly [];
                                readonly properties: {};
                                readonly additionalProperties: {
                                    readonly type: "object";
                                    readonly required: readonly ["status"];
                                    readonly properties: {
                                        readonly status: {
                                            readonly enum: readonly ["SUCCESS", "FAILURE"];
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                            };
                            readonly addressCheckResults: {
                                readonly type: "object";
                                readonly required: readonly [];
                                readonly properties: {};
                                readonly additionalProperties: {
                                    readonly type: "object";
                                    readonly required: readonly ["status"];
                                    readonly properties: {
                                        readonly status: {
                                            readonly enum: readonly ["SUCCESS", "FAILURE"];
                                        };
                                    };
                                    readonly additionalProperties: false;
                                };
                            };
                            readonly consentIds: {
                                readonly type: "object";
                                readonly required: readonly [];
                                readonly properties: {};
                                readonly additionalProperties: {
                                    readonly type: "string";
                                    readonly description: "A UUID";
                                    readonly format: "uuid";
                                };
                            };
                            readonly contracts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly required: readonly ["nomClientFinalOuDenominationSociale", "id", "prm", "categorieClientFinalCode", "adresseInstallationNormalisee"];
                                    readonly properties: {
                                        readonly nomClientFinalOuDenominationSociale: {
                                            readonly type: "string";
                                            readonly description: "a string";
                                            readonly title: "string";
                                            readonly examples: readonly ["DUPONT Marie", "SARL DUPONT ET FILS"];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly description: "A UUID";
                                            readonly format: "uuid";
                                        };
                                        readonly prm: {
                                            readonly type: "string";
                                            readonly pattern: "^[0-9]{14}$";
                                            readonly examples: readonly ["00059461297239"];
                                        };
                                        readonly categorieClientFinalCode: {
                                            readonly enum: readonly ["RES", "PRO"];
                                        };
                                        readonly adresseInstallationNormalisee: {
                                            readonly type: "object";
                                            readonly required: readonly [];
                                            readonly properties: {
                                                readonly ligne1: {
                                                    readonly type: "string";
                                                    readonly description: "Ligne 1 de l’adresse postale.\n  Cette ligne identifie le destinataire.\n  Cette donnée ne sera pas renseignée car\n  redondante avec la donnée « Nom ou\n  dénomination sociale du client »\n  ";
                                                    readonly title: "Ligne 1 de l’adresse postale.";
                                                };
                                                readonly ligne2: {
                                                    readonly type: "string";
                                                    readonly description: "\n  Ligne 2 de l’adresse postale.\n  Cette ligne identifie généralement le\n  complément d’identification du destinataire ou\n  du point de remise (escalier, étage,\n  appartement, boîte aux lettres…).\n        ";
                                                    readonly title: "string";
                                                    readonly examples: readonly ["03 D", "COLLINE DE VELAUX VI", "A"];
                                                };
                                                readonly ligne3: {
                                                    readonly type: "string";
                                                    readonly description: "\n  Ligne 3 de l’adresse postale.\n  Cette ligne identifie généralement le\n  complément d’identification du point\n  géographique (entrée, tour, immeuble,\n  bâtiment, résidence, zone industrielle…).\n        ";
                                                    readonly title: "string";
                                                    readonly examples: readonly ["QUARTIER LES CAIRADES", "VILLA CHANTE LA MER", "VILLA B LOTISSEMENT ACHBARI", "QUARTIER LE PEGOUY", "CHEMIN DE LA CHABOTT"];
                                                };
                                                readonly ligne4: {
                                                    readonly type: "string";
                                                    readonly description: "\n  Ligne 4 de l’adresse postale.\n  Cette ligne identifie le numéro et le libellé de la\n  voie.\n        ";
                                                    readonly title: "string";
                                                    readonly examples: readonly ["70 ALLEE DU BOIS", "11 IMPASSE DES SENTEURS", "27 CHEMIN DES COUSTELLINES"];
                                                };
                                                readonly ligne5: {
                                                    readonly type: "string";
                                                    readonly description: "\n  Ligne 5 de l’adresse postale.\n  Cette ligne identifie généralement :\n  - le lieu-dit ou le service particulier de\n  distribution dans le cas d’un client\n  résidentiel,\n  - les mentions spéciales de distribution et\n  commune d’implantation de l’entreprise (si\n  différente du bureau distributeur CEDEX)\n  dans le cas d’un client professionnel.\n        ";
                                                    readonly title: "string";
                                                    readonly examples: readonly ["HELLEMMES LILLE", "BP 4"];
                                                };
                                                readonly ligne6: {
                                                    readonly type: "string";
                                                    readonly description: "\n  Ligne 6 de l’adresse postale.\n  Cette ligne identifie :\n  - le code postal et la localité de destination\n  dans le cas d’un client résidentiel,\n  - le code postal et bureau distributeur ou\n  code cedex et bureau distributeur cedex\n  dans le cas d’un client professionnel.\n        ";
                                                    readonly title: "string";
                                                    readonly examples: readonly ["84190 BEAUMES DE VENISE"];
                                                };
                                                readonly ligne7: {
                                                    readonly type: "string";
                                                    readonly description: "\n  Ligne 7 de l’adresse postale.\n  Cette ligne identifie le pays.\n  Cette donnée ne sera pas renseignée.\n        ";
                                                    readonly title: "string";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly additionalProperties: false;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                };
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
        };
    };
};
declare const GetOrder: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly orderId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["orderId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-07/schema#";
            readonly type: "object";
            readonly required: readonly ["id", "status", "requests"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "A UUID";
                    readonly format: "uuid";
                };
                readonly status: {
                    readonly $comment: "/schemas/enums";
                    readonly oneOf: readonly [{
                        readonly title: "CREATED";
                        readonly const: "CREATED";
                    }, {
                        readonly title: "PENDING_ADDRESS_CHECK";
                        readonly const: "PENDING_ADDRESS_CHECK";
                    }, {
                        readonly title: "ADDRESS_CHECK_FAILED";
                        readonly const: "ADDRESS_CHECK_FAILED";
                    }, {
                        readonly title: "PENDING_REQUESTS";
                        readonly const: "PENDING_REQUESTS";
                    }, {
                        readonly title: "SOME_REQUESTS_FAILED";
                        readonly const: "SOME_REQUESTS_FAILED";
                    }, {
                        readonly title: "SUCCESS";
                        readonly const: "SUCCESS";
                    }];
                };
                readonly requests: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["id", "type", "status", "orderedAt", "completedAt", "errorMessage"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "A UUID";
                                readonly format: "uuid";
                            };
                            readonly type: {
                                readonly enum: readonly ["C68", "R63", "R64", "R64_SYNC", "R65", "R65_SYNC", "R66", "R66_SYNC", "R67", "LOADCURVE"];
                            };
                            readonly status: {
                                readonly anyOf: readonly [{
                                    readonly $comment: "/schemas/enums";
                                    readonly oneOf: readonly [{
                                        readonly title: "NOT_STARTED";
                                        readonly const: "NOT_STARTED";
                                    }, {
                                        readonly title: "PENDING";
                                        readonly const: "PENDING";
                                    }, {
                                        readonly title: "SUCCESS";
                                        readonly const: "SUCCESS";
                                    }, {
                                        readonly title: "FAILED";
                                        readonly const: "FAILED";
                                    }];
                                }, {
                                    readonly const: "PENDING_ADDRESS_CHECK";
                                }];
                            };
                            readonly orderedAt: {
                                readonly anyOf: readonly [{}, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                            readonly completedAt: {
                                readonly anyOf: readonly [{}, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                            readonly dataUrl: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                }, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                            readonly errorMessage: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                }, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                            readonly loadCurve: {
                                readonly anyOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["period", "startsAt", "endsAt", "values"];
                                    readonly properties: {
                                        readonly period: {
                                            readonly type: "string";
                                            readonly description: "a string";
                                            readonly title: "string";
                                        };
                                        readonly startsAt: {};
                                        readonly endsAt: {};
                                        readonly values: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly anyOf: readonly [{
                                                    readonly type: "number";
                                                    readonly description: "a number";
                                                    readonly title: "number";
                                                }, {
                                                    readonly const: any;
                                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                                }];
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                }, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
        };
    };
};
declare const GetRequestData: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly requestId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["requestId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly period: {
                    readonly enum: readonly ["5min", "10min", "15min", "30min", "1h", "1d"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The period of data to retrieve";
                };
                readonly format: {
                    readonly enum: readonly ["csv", "json"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The format of the data to retrieve";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const Order: {
    readonly body: {
        readonly $schema: "http://json-schema.org/draft-07/schema#";
        readonly type: "object";
        readonly required: readonly ["consentId", "requests"];
        readonly properties: {
            readonly consentId: {
                readonly type: "string";
                readonly description: "A UUID";
                readonly format: "uuid";
            };
            readonly requests: {
                readonly type: "array";
                readonly items: {
                    readonly anyOf: readonly [{
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "C68";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly description: "Données techniques et contractuelles";
                        readonly title: "C68";
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "R63";
                            };
                            readonly direction: {
                                readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly until: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly title: "Struct (Encoded side)";
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "R64";
                            };
                            readonly direction: {
                                readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly until: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly title: "Struct (Encoded side)";
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "R65";
                            };
                            readonly direction: {
                                readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly until: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly title: "Struct (Encoded side)";
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "R66";
                            };
                            readonly direction: {
                                readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly until: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly title: "Struct (Encoded side)";
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "R67";
                            };
                            readonly direction: {
                                readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly until: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly title: "Struct (Encoded side)";
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "R64_SYNC";
                            };
                            readonly direction: {
                                readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly until: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly title: "Struct (Encoded side)";
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "R65_SYNC";
                            };
                            readonly direction: {
                                readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly until: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly title: "Struct (Encoded side)";
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "R66_SYNC";
                            };
                            readonly direction: {
                                readonly enum: readonly ["SOUTIRAGE", "INJECTION"];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly until: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly title: "Struct (Encoded side)";
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["type"];
                        readonly properties: {
                            readonly type: {
                                readonly const: "LOADCURVE";
                            };
                            readonly direction: {
                                readonly enum: readonly ["CONSUMPTION", "INJECTION"];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                            readonly until: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISO 8601 date format";
                            };
                        };
                        readonly additionalProperties: false;
                        readonly title: "Struct (Encoded side)";
                    }];
                };
            };
        };
        readonly additionalProperties: false;
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-07/schema#";
            readonly type: "object";
            readonly required: readonly ["id", "status", "requests"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "A UUID";
                    readonly format: "uuid";
                };
                readonly status: {
                    readonly $comment: "/schemas/enums";
                    readonly oneOf: readonly [{
                        readonly title: "CREATED";
                        readonly const: "CREATED";
                    }, {
                        readonly title: "PENDING_ADDRESS_CHECK";
                        readonly const: "PENDING_ADDRESS_CHECK";
                    }, {
                        readonly title: "ADDRESS_CHECK_FAILED";
                        readonly const: "ADDRESS_CHECK_FAILED";
                    }, {
                        readonly title: "PENDING_REQUESTS";
                        readonly const: "PENDING_REQUESTS";
                    }, {
                        readonly title: "SOME_REQUESTS_FAILED";
                        readonly const: "SOME_REQUESTS_FAILED";
                    }, {
                        readonly title: "SUCCESS";
                        readonly const: "SUCCESS";
                    }];
                };
                readonly requests: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["id", "type", "status", "orderedAt", "completedAt", "errorMessage"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "A UUID";
                                readonly format: "uuid";
                            };
                            readonly type: {
                                readonly enum: readonly ["C68", "R63", "R64", "R64_SYNC", "R65", "R65_SYNC", "R66", "R66_SYNC", "R67", "LOADCURVE"];
                            };
                            readonly status: {
                                readonly anyOf: readonly [{
                                    readonly $comment: "/schemas/enums";
                                    readonly oneOf: readonly [{
                                        readonly title: "NOT_STARTED";
                                        readonly const: "NOT_STARTED";
                                    }, {
                                        readonly title: "PENDING";
                                        readonly const: "PENDING";
                                    }, {
                                        readonly title: "SUCCESS";
                                        readonly const: "SUCCESS";
                                    }, {
                                        readonly title: "FAILED";
                                        readonly const: "FAILED";
                                    }];
                                }, {
                                    readonly const: "PENDING_ADDRESS_CHECK";
                                }];
                            };
                            readonly orderedAt: {
                                readonly anyOf: readonly [{}, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                            readonly completedAt: {
                                readonly anyOf: readonly [{}, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                            readonly dataUrl: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                }, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                            readonly errorMessage: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                    readonly description: "a string";
                                    readonly title: "string";
                                }, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                            readonly loadCurve: {
                                readonly anyOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["period", "startsAt", "endsAt", "values"];
                                    readonly properties: {
                                        readonly period: {
                                            readonly type: "string";
                                            readonly description: "a string";
                                            readonly title: "string";
                                        };
                                        readonly startsAt: {};
                                        readonly endsAt: {};
                                        readonly values: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly anyOf: readonly [{
                                                    readonly type: "number";
                                                    readonly description: "a number";
                                                    readonly title: "number";
                                                }, {
                                                    readonly const: any;
                                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                                }];
                                            };
                                        };
                                    };
                                    readonly additionalProperties: false;
                                }, {
                                    readonly const: any;
                                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                                }];
                            };
                        };
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly additionalProperties: false;
        };
    };
};
declare const SearchContract: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                    readonly type: "string";
                    readonly description: "a string at least 3 character(s) long";
                    readonly title: "string";
                    readonly examples: readonly ["Jean Dupont"];
                    readonly minLength: 3;
                };
                readonly address: {
                    readonly $schema: "http://json-schema.org/draft-07/schema#";
                    readonly type: "string";
                    readonly description: "a string";
                    readonly title: "string";
                    readonly examples: readonly ["1 rue de la paix 75000 Paris"];
                };
            };
            readonly required: readonly ["name", "address"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["results"];
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["nomClientFinalOuDenominationSociale", "id", "prm", "categorieClientFinalCode", "adresseInstallationNormalisee"];
                        readonly properties: {
                            readonly nomClientFinalOuDenominationSociale: {
                                readonly type: "string";
                                readonly description: "a string";
                                readonly title: "string";
                                readonly examples: readonly ["DUPONT Marie", "SARL DUPONT ET FILS"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "A UUID";
                                readonly format: "uuid";
                            };
                            readonly prm: {
                                readonly type: "string";
                                readonly pattern: "^[0-9]{14}$";
                                readonly examples: readonly ["00059461297239"];
                            };
                            readonly categorieClientFinalCode: {
                                readonly enum: readonly ["RES", "PRO"];
                            };
                            readonly adresseInstallationNormalisee: {
                                readonly type: "object";
                                readonly required: readonly [];
                                readonly properties: {
                                    readonly ligne1: {
                                        readonly type: "string";
                                        readonly description: "Ligne 1 de l’adresse postale.\n  Cette ligne identifie le destinataire.\n  Cette donnée ne sera pas renseignée car\n  redondante avec la donnée « Nom ou\n  dénomination sociale du client »\n  ";
                                        readonly title: "Ligne 1 de l’adresse postale.";
                                    };
                                    readonly ligne2: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 2 de l’adresse postale.\n  Cette ligne identifie généralement le\n  complément d’identification du destinataire ou\n  du point de remise (escalier, étage,\n  appartement, boîte aux lettres…).\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["03 D", "COLLINE DE VELAUX VI", "A"];
                                    };
                                    readonly ligne3: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 3 de l’adresse postale.\n  Cette ligne identifie généralement le\n  complément d’identification du point\n  géographique (entrée, tour, immeuble,\n  bâtiment, résidence, zone industrielle…).\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["QUARTIER LES CAIRADES", "VILLA CHANTE LA MER", "VILLA B LOTISSEMENT ACHBARI", "QUARTIER LE PEGOUY", "CHEMIN DE LA CHABOTT"];
                                    };
                                    readonly ligne4: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 4 de l’adresse postale.\n  Cette ligne identifie le numéro et le libellé de la\n  voie.\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["70 ALLEE DU BOIS", "11 IMPASSE DES SENTEURS", "27 CHEMIN DES COUSTELLINES"];
                                    };
                                    readonly ligne5: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 5 de l’adresse postale.\n  Cette ligne identifie généralement :\n  - le lieu-dit ou le service particulier de\n  distribution dans le cas d’un client\n  résidentiel,\n  - les mentions spéciales de distribution et\n  commune d’implantation de l’entreprise (si\n  différente du bureau distributeur CEDEX)\n  dans le cas d’un client professionnel.\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["HELLEMMES LILLE", "BP 4"];
                                    };
                                    readonly ligne6: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 6 de l’adresse postale.\n  Cette ligne identifie :\n  - le code postal et la localité de destination\n  dans le cas d’un client résidentiel,\n  - le code postal et bureau distributeur ou\n  code cedex et bureau distributeur cedex\n  dans le cas d’un client professionnel.\n        ";
                                        readonly title: "string";
                                        readonly examples: readonly ["84190 BEAUMES DE VENISE"];
                                    };
                                    readonly ligne7: {
                                        readonly type: "string";
                                        readonly description: "\n  Ligne 7 de l’adresse postale.\n  Cette ligne identifie le pays.\n  Cette donnée ne sera pas renseignée.\n        ";
                                        readonly title: "string";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                        readonly additionalProperties: false;
                        readonly $schema: "http://json-schema.org/draft-07/schema#";
                    };
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-07/schema#";
        };
    };
};
export { Ask, GetAsk, GetAskProof, GetAsks, GetOrder, GetRequestData, Order, SearchContract };
