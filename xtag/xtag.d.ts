// Type definitions for x-tag 0.6.2
// Project: http://x-tags.org/
// Definitions by: Kenneth Brubaker <https://github.com/kenbrubaker>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="lib.d.ts">

interface IXTagLifecycleRegisterOptions {
    /** 
     * Fired once at the time a component is initially created or parsed. Allows you to modify the element before any 
     * other code is applied to it.
     */
    created?(prototype: HTMLElement): void;
    /** 
     * Fired each time a component is inserted into the DOM. Allows you to do things like check the state or structure 
     * of the surrounding DOM tree or window scope and modify your component accordingly.
     */
    inserted?();
    /** fired each time a element is removed from DOM */
    removed?();
    /** fired when attributes are set */
    attributeChanged?();
}

interface IXTagAccessor {
    get(): any;
    set?(value: any): void; 
}
interface IXTagRegisterOptions {
    lifecycle: IXTagLifecycleRegisterOptions;
}

interface IXTagStatic {
    /** Converts the given object into an array. */
    toArray(obj: Object): any[];
    /** Returns a boolean that indicates if the element has the specified class. */
    hasClass(element: any, klass: string): bool;
    /** Adds a class to the element. */
    addClass(element: any, klass: string): any;
    /** Removes a class from the element. */
    removeClass(element: any, klass: string): any;
    /** Adds the class if it doesn't exist on an element or removes the class if it exists. */
    toggleClass(element: any, klass: string): any;
    /** Returns a boolean that indicates if the given selector matches the element. */
    matchSelector(element: any, selector: string): bool;
    /** Runs querySelector all on the given element and returns the results as an array. */
    query(element: any, selector: string): any[];


    register(name: string, options: any);
}

declare var xtag: IXTagStatic;
