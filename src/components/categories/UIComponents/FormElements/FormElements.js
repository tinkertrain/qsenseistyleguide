import React, { Component } from 'react';
import CodeBlock from '../../../CodeBlock';

export class FormElements extends Component {
  render() {
    return (
      <div>
        <section className="bgLight pageSection">
          <p>Found in <code className="qs_CodeInline">_formElements.scss</code></p>
          <h2>Basic Elements</h2>
          <ul className="examplesList">
            <li>
              <h3>Text input</h3>
              <div className="sample">
                <div className="qs_Input">
                  <input type="text" name="example1" id="example1" placeholder="First Name"/>
                </div>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<div class="qs_Input">
  <input type="text" name="example1" id="example1" placeholder="First Name"/>
</div>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Text input focused</h3>
              <div className="sample">
                <div className="qs_Input">
                  <input className="focused" type="text" name="example2" id="example2" placeholder="First Name"/>
                </div>
              </div>
            </li>
            <li>
              <h3>Text input disabled</h3>
              <div className="sample">
                <div className="qs_Input">
                  <input disabled type="text" name="example3" id="example3" placeholder="First Name"/>
                </div>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<div class="qs_Input">
  <input type="text" name="example3" id="example3" placeholder="First Name" disabled/>
</div>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Input with label on top</h3>
              <p>Labels use the color <code className="qs_CodeInline">$mediumgray</code></p>
              <div className="sample">
                <div className="qs_Input">
                  <label htmlFor="example4">First Name</label>
                  <input type="text" name="example4" id="example4" placeholder="First Name"/>
                </div>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<div class="qs_Input">
  <label for="example4">First Name</label>
  <input type="text" name="example4" id="example4" placeholder="First Name"/>
</div>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Two input in one row</h3>
              <div className="sample">
                <div className="qs_Input qs_Input--inline">
                  <input type="text" name="example5" id="example5" placeholder="First Name"/>
                  <input type="text" name="example6" id="example6" placeholder="Last Name"/>
                </div>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<div class="qs_Input qs_Input--inline">
  <input type="text" name="example5" id="example5" placeholder="First Name"/>
  <input type="text" name="example6" id="example6" placeholder="Last Name"/>
</div>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Text area</h3>
              <div className="sample">
                <div className="qs_Input">
                  <textarea name="example7" id="example7" placeholder="Description..."></textarea>
                </div>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<div class="qs_Input">
  <textarea name="example7" id="example7" placeholder="Description..."></textarea>
</div>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Select</h3>
              <p>We opt for minimal cross browser styling of the select element using only css.</p>
              <div className="sample">
                <div className="qs_Input qs_Select">
                  <select name="select" id="select">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<div class="qs_Input qs_Select">
  <select name="select" id="select">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>`
                  }
                </CodeBlock>
              </div>
            </li>
          </ul>
        </section>
        <section className="bgMedium pageSection">
          <h2>Form</h2>
          <ul className="examplesList">
            <li>
              <h3>Form without labels</h3>
              <div className="sample">
                <form className="qs_Form">
                  <div className="qs_Input qs_Input--inline">
                    <input type="text" name="example8" id="example8" placeholder="First Name"/>
                    <input type="text" name="example9" id="example9" placeholder="Last Name"/>
                  </div>
                  <div className="qs_Input">
                    <input type="text" name="example11" id="example11" placeholder="Company"/>
                  </div>
                  <div className="qs_Input qs_Select">
                    <select name="select2" id="select2">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  <div className="qs_Input">
                    <textarea name="example10" id="example10" placeholder="Description"></textarea>
                  </div>
                  <div className="qs_Input">
                    <button className="qs_Button qs_Button--green">Sign up</button>
                  </div>
                </form>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<form class="qs_Form">
  <div class="qs_Input qs_Input--inline">
    <input type="text" name="example8" id="example8" placeholder="First Name"/>
    <input type="text" name="example9" id="example9" placeholder="Last Name"/>
  </div>
  <div class="qs_Input">
    <input type="text" name="example11" id="example11" placeholder="Company"/>
  </div>
  <div class="qs_Input">
    <textarea name="example10" id="example10" placeholder="Description"></textarea>
  </div>
  <div class="qs_Input">
    <button class="qs_Button qs_Button--green">Sign up</button>
  </div>
</form>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Form with labels on top</h3>
              <div className="sample">
                <form className="qs_Form">
                  <div className="qs_Input">
                    <label htmlFor="example12">First Name</label>
                    <input type="text" name="example12" id="example12" placeholder="John"/>
                  </div>
                  <div className="qs_Input">
                    <label htmlFor="example13">Last Name</label>
                    <input type="text" name="example13" id="example13" placeholder="Doe"/>
                  </div>
                  <div className="qs_Input">
                    <label htmlFor="example14">Message</label>
                    <textarea name="example14" id="example14" cols="30" rows="10" placeholder="Dear..."></textarea>
                  </div>
                  <div className="qs_Input">
                    <button className="qs_Button qs_Button--green">Sign up</button>
                  </div>
                </form>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<form class="qs_Form">
  <div class="qs_Input">
    <label for="example12">First Name</label>
    <input type="text" name="example12" id="example12" placeholder="John"/>
  </div>
  <div class="qs_Input">
    <label for="example13">Last Name</label>
    <input type="text" name="example13" id="example13" placeholder="Doe"/>
  </div>
  <div class="qs_Input">
    <label for="example14">Message</label>
    <textarea name="example14" id="example14" cols="30" rows="10" placeholder="Dear..."></textarea>
  </div>
  <div class="qs_Input">
    <button class="qs_Button qs_Button--green">Sign up</button>
  </div>
</form>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Form with inline labels</h3>
              <div className="sample">
                <form className="qs_Form qs_Form--inline">
                  <div className="qs_Input">
                    <label htmlFor="example15">First Name</label>
                    <input type="text" name="example15" id="example15" placeholder="John"/>
                  </div>
                  <div className="qs_Input">
                    <label htmlFor="example16">Last Name</label>
                    <input type="text" name="example16" id="example16" placeholder="Doe"/>
                  </div>
                  <div className="qs_Input">
                    <label htmlFor="example17">Message</label>
                    <textarea name="example17" id="example17"  placeholder="Dear..."></textarea>
                  </div>
                  <div className="qs_Input">
                    <button className="qs_Button qs_Button--green">Sign up</button>
                  </div>
                </form>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<form class="qs_Form qs_Form--inline">
  <div class="qs_Input">
    <label for="example15">First Name</label>
    <input type="text" name="example15" id="example15" placeholder="John"/>
  </div>
  <div class="qs_Input">
    <label for="example16">Last Name</label>
    <input type="text" name="example16" id="example16" placeholder="Doe"/>
  </div>
  <div class="qs_Input">
    <label for="example17">Message</label>
    <textarea name="example17" id="example17"  placeholder="Dear..."></textarea>
  </div>
  <div class="qs_Input">
    <button class="qs_Button qs_Button--green">Sign up</button>
  </div>
</form>`
                  }
                </CodeBlock>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
