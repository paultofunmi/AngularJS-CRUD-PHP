"use strict";
app.controller('rangeController', ['$scope', 'Security', function ($scope, Security, $rootScope) {
    $scope.deptDataList = [];
    $scope.directiveScopeDict = {};
    $scope.deptRange = {};
    function Initialize(){
        var entryForm = {};

        $scope.entryForm = entryForm;
    }
    Initialize();

    $scope.EventListener = function(scope, iElement, iAttrs, controller){
        console.log("<"+iElement[0].tagName+">" +" Directive overried EventListener()");
        var prgmID = scope.programId;
        if($scope.directiveScopeDict[prgmID] == null || typeof($scope.directiveScopeDict[prgmID]) == "undefined"){
          $scope.directiveScopeDict[prgmID] = scope;
        }

        //http://api.jquery.com/Types/#Event
        //The standard events in the Document Object Model are:
        // blur, focus, load, resize, scroll, unload, beforeunload,
        // click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave,
        // change, select, submit, keydown, keypress, and keyup.
        iElement.ready(function() {
        })
    }

    $scope.SetDefaultValue = function(scope, iElement, iAttrs, controller){
        console.log("<"+iElement[0].tagName+">" +" Directive overried SetDefaultValue()");

//      controller.ngModel.gender = "M";
    }

    $scope.StatusChange = function(fieldName, newValue, newObj, scope, iElement, iAttrs, controller){
        console.log("<"+iElement[0].tagName+">" +" Directive overried StatusChange()");
    }

    $scope.ValidateBuffer = function(scope, iElement, iAttrs, controller){
        console.log("<"+iElement[0].tagName+">" +" Directive overried ValidateBuffer()");
        return true;
    }

    $scope.CustomSelectedToRecord = function(sRecord, rowScope, scope, iElement, controller){
        console.log("<"+iElement[0].tagName+">" +" Directive overried CustomPointedToRecord()");
//            $scope.entryForm = sRecord;
    }

    $scope.CustomSubmitDataResult = function(responseObj, httpStatusCode, scope, element, attrs, ctrl){
        var prgmID = scope.programId;
//            if(prgmID == "ds01dp"){
//              $scope.directiveScopeDict["dw01dp"].ClearNRefreshData();
//            }
    }
}]);