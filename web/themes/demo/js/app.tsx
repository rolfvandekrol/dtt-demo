import * as React from "react"
import * as ReactDOM from "react-dom"

import * as Moment from 'moment'
require('moment/locale/nl')

import { createBrowserHistory } from "history"

import "babel-polyfill"
import "isomorphic-fetch"
import { polyfill as PromisePolyfill } from "es6-promise"

PromisePolyfill()
Moment.locale('nl')

console.log('test')