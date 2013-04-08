// Type definitions for x-tag 0.6.2
// Project: http://x-tags.org/
// Definitions by: Kenneth Brubaker <https://github.com/kenbrubaker>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IXTagLifecycleRegisterOptions {
    /** 
     * Fired once at the time a component is initially created or parsed. Allows you to modify the element before any 
     * other code is applied to it.
     */
    public created()?;
    /** 
     * Fired each time a component is inserted into the DOM. Allows you to do things like check the state or structure 
     * of the surrounding DOM tree or window scope and modify your component accordingly.
     */
    public inserted()?;
    /** fired each time a element is removed from DOM */
    public removed()?;
    /** fired when attributes are set */
    public attributeChanged()?;
}
interface IXTagAccessor {
    public get(): any;
    public set(value: any)?: void; 
}
interface IXTagRegisterOptions {
    public lifecycle: IXTagLifecycleRegisterOptions;
}

interface IXTagStatic {
    /** Converts the given object into an array. */
    public toArray(obj: Object): [];
    /** Returns a boolean that indicates if the element has the specified class. */
    public hasClass(element: any, klass: string): bool;
    /** Adds a class to the element. */
    public addClass(element: any, klass: string): any;
    /** Removes a class from the element. */
    public removeClass(element: any, klass: string): any;
    /** Adds the class if it doesn't exist on an element or removes the class if it exists. */
    public toggleClass(element: any, klass: string): any;
    /** Returns a boolean that indicates if the given selector matches the element. */
    public matchSelector(element: any, selector: string): bool;
    /** Runs querySelector all on the given element and returns the results as an array. */
    public query(element: any, selector: string): [];


    public register(name: string, options: any);
}

declare var xtag: IXTagStatic;
