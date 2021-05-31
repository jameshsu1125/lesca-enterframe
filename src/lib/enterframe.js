export default class EnterFrame {
	/**
	 * call function each frame
	 * @param {function} fn functuin of frame
	 * @returns
	 */
	constructor(fn = () => {}) {
		const { EnterFrame } = window;

		if (EnterFrame !== undefined) {
			throw new Error('EnterFrame aleady Use');
			return;
		}

		this.enable = true;

		window.requestAnimFrame = (function () {
			return (
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function (callback) {
					window.setTimeout(callback, 1000 / 60);
				}
			);
		})();

		this.time = new Date().getTime();
		this.fn = fn;
		this.frame();

		if (EnterFrame) window.EnterFrame += 1;
		else window.EnterFrame = 0;

		return this;
	}

	/**
	 * destroy and stop render
	 */
	destroy() {
		window.requestAnimFrame = function () {};
		this.fn = () => {};
		if (window.EnterFrame) delete window.EnterFrame;
	}

	/**
	 *
	 * @param {function} fn add more function
	 */
	add(fn) {
		this.fn = (function (_super) {
			return function () {
				fn(arguments[0]);
				return _super.apply(this, arguments);
			};
		})(this.fn);
	}

	frame() {
		const delta = this.getTime();
		const target = this;
		this.fn({ delta, target });

		if (this.enable) window.requestAnimFrame(() => this.frame());
	}

	getTime() {
		return new Date().getTime() - this.time;
	}

	stop() {
		if (!this.enable) return;

		this.enable = false;
		this.stopTime = new Date().getTime();
	}

	play() {
		if (this.enable) return;
		this.enable = true;

		this.now = new Date().getTime() - this.stopTime;
		this.time += this.now;

		this.frame();
	}
}
