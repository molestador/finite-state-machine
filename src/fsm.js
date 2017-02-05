class FSM {

    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (!config) {
            throw new Error()
        }
        this.config = config;
        this.currentState = config.initial;


    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.currentState;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (!this.config.states[state]) {
            throw new Error();
        }
        this.currentState = state;

    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        if (!this.config.states[this.currentState].transitions[event]) {
            throw new Error();
        }
        this.changeState(this.config.states[this.currentState].transitions[event]);

    }
    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.changeState(this.config.initial)

    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        if (!event) {
            return Object.keys(this.config.states)
        }
        const eventStates = [];
        const newStates = Object.keys(this.config.states)
        for (var i = 0; i < newStates.length; i += 1) {
            var keys = newStates[i];
            if (this.config.states[keys].transitions[event]) {
                eventStates.push(keys)
            }
        }
        return eventStates;
    }





    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() { }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() { }

    /**
     * Clears transition history
     */
    clearHistory() { }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
