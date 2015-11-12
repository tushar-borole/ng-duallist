
ng-duallist
===================

angular dual list directive with lazy load support

----------


Getting Started
-------------

.

####  **bower install**

    bower install ng-duallist

####  **npm install**

    npm install ng-duallist

####  **add dependency in you module**

    var app=angular.module("you app name",['ng-duallist'])
####  **Using directive**

    <duallist template-url="template.html" duallist-option="vm.options" leftscope="vm.leftValue" rightscope="vm.rightValue"></duallist> 


### Documentation





    
     vm.options = {
                leftContainerScrollEnd: function () { //left container scroll endevent for lazy load
                  console.log("inn")
                    
                },
                rightContainerScrollEnd: function () { // right container scroll end event for lazy load
                    console.log("inn")
                    
                },
                leftContainerSearch: function (text) { // left container search  event for lazy load
                    console.log(text)

                },
                rightContainerSearch: function (text) { // right container search  event for lazy load

                    console.log(text)
                },

            }

   




----------

## Contributing

Open an issue first to discuss potential changes/additions. If you have questions with the guide, feel free to leave them as issues in the repository. If you find a typo, create a pull request. The idea is to keep the content up to date and use github’s native feature to help tell the story with issues and PR’s, which are all searchable via google. Why? Because odds are if you have a question, someone else does too! You can learn more here at about how to contribute.

*By contributing to this repository you are agreeing to make your content available subject to the license of this repository.*

### Process
    1. Discuss the changes in a GitHub issue.
    2. Open a Pull Request, reference the issue, and explain the change and why it adds value.
    3. The Pull Request will be evaluated and either merged or declined.

## License

 Use this guide. Attributions are appreciated._

### Copyright

Copyright (c) 2014-2015 [Tushar Borole](http://www.tusharborole.com)

### (The MIT License)
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.






