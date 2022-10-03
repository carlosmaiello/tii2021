import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Animal extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('database.db')
    }

    static get tableName() {
        return 'animals'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER, primary_key: true, autoincrement: true }, // For while only supports id as primary key
            name: { type: types.TEXT, not_null: true },
            color: { type: types.TEXT },
            age: { type: types.NUMERIC },
            another_uid: { type: types.INTEGER, unique: true },
            timestamp: { type: types.INTEGER, default: () => Date.now() }
        }
    }
}