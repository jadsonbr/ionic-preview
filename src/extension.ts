'use strict';

import * as vscode from 'vscode';
import * as path from 'path';
import * as http from 'http';
import * as net from 'net'
import * as fs from 'fs';


export function activate(context: vscode.ExtensionContext) {

    let portaIonic: any;
    let hostIonic: any;

    // Verifica se porta está em uso
    var portNotInUse = function(port, host, callback) {
        var server = net.createServer(function(socket) {
            socket.write('Echo server\r\n');
            socket.pipe(socket);
        });
        server.listen(port, host);
            server.on('error', function (e) {
            callback(true);
        });
        server.on('listening', function (e) {
            server.close();
            if(host == '127.0.0.1'){
                if (portNotInUse0000(port)){
                    callback(true);
                } else {
                    callback(false);
                }   
            } else {
                callback(false);
            }      
        });
    }; 

    let portNotInUse0000 = function(porta) {
        var server = net.createServer(function(socket) {
            socket.write('Echo server\r\n');
            socket.pipe(socket);
        });
        server.listen(porta, '0.0.0.0');
            server.on('error', function (e) {
            return(true);
        });
        server.on('listening', function (e) {
            server.close();
            return(false);
        });
    };     

    //Criar arquivo
    var createFile = function(arquivo, conteudo){
        fs.writeFile(arquivo, conteudo,  function(err) {
            if (err) {
                return console.error(err);
            }
        });
    };    

    var lerConf = function(){
        let config = vscode.workspace.getConfiguration('ionic-preview');
        portaIonic = config.get('port');    
        hostIonic = config.get('host');   
    }

    let previewAndroid = vscode.commands.registerCommand('extension.ionic-preview-android', async () => {
        lerConf();       
                    
        portNotInUse(portaIonic, hostIonic, function(returnValue) {
            if (returnValue){
                let htmlAndroid = '<!DOCTYPE html><html lang="en"><head><title></title><meta charset="UTF-8"></head><body><aside id="platform-preview-2" class="platform-preview-2"><div id="demo-device-android" class="android"><iframe src="http://localhost:'+portaIonic+'/?ionicplatform=android" width="360" height="640" frameborder="0" scrolling="no" style="pointer-events: auto;"> </iframe></div></aside> </body><link rel="stylesheet" type="text/css" href="styles.css"><style>html, body { width: 100% !important; height: 100% !important; margin-top: 0px; margin: 0}.platform-preview-2 { min-width: 360px !important; margin: 0 auto !important; text-align: center; }</style></html>';
                createFile(path.join(__filename, '..','..','..','out','src','android.html'), htmlAndroid);
                let uriandroid = vscode.Uri.file(path.join(__filename, '..','..','..','out','src','android.html'));  
                let success = vscode.commands.executeCommand('vscode.previewHtml', uriandroid, vscode.ViewColumn.Two, 'Ionic Preview - Android').then((success) => {}, 
                (reason) => {
                    vscode.window.showErrorMessage(reason);
                });
            } else {
                vscode.window.showErrorMessage('We did not identify the Ionic serve running on host '+hostIonic+' on port '+portaIonic);                  
            }
        });    
    });

    let previewIOS = vscode.commands.registerCommand('extension.ionic-preview-ios', async () => {
        lerConf();             
                    
        portNotInUse(portaIonic, hostIonic, function(returnValue) {
            if (returnValue){
                let htmlAndroid = '<!DOCTYPE html><html lang="en"><head><title></title><meta charset="UTF-8"></head><body><aside id="platform-preview-2" class="platform-preview-2"><div id="demo-device-ios" class="ios"><iframe src="http://localhost:'+portaIonic+'/?ionicplatform=ios" width="360" height="640" frameborder="0" scrolling="no" style="pointer-events: auto;"> </iframe></div></aside> </body><link rel="stylesheet" type="text/css" href="styles.css"><style>html, body { width: 100% !important; height: 100% !important; margin-top: 0px; margin: 0}.platform-preview-2 { min-width: 360px !important; margin: 0 auto !important; text-align: center; }</style></html>';
                createFile(path.join(__filename, '..','..','..','out','src','ios.html'), htmlAndroid);
                let uriios = vscode.Uri.file(path.join(__filename, '..','..','..','out','src','ios.html'));  
                let success = vscode.commands.executeCommand('vscode.previewHtml', uriios, vscode.ViewColumn.Two, 'Ionic Preview - IOS').then((success) => {}, 
                (reason) => {
                    vscode.window.showErrorMessage(reason);
                });
            } else {
                vscode.window.showErrorMessage('We did not identify the Ionic serve running on host '+hostIonic+' on port '+portaIonic);                                      
            }
        });    
    });  

    let previewWindows = vscode.commands.registerCommand('extension.ionic-preview-windows', async () => {
        lerConf();             
                    
        portNotInUse(portaIonic, hostIonic, function(returnValue) {
            if (returnValue){
                let htmlAndroid = '<!DOCTYPE html><html lang="en"><head><title></title><meta charset="UTF-8"></head><body><aside id="platform-preview-2" class="platform-preview-2"><div id="demo-device-windows" class="windows"><iframe src="http://localhost:'+portaIonic+'/?ionicplatform=windows" width="360" height="640" frameborder="0" scrolling="no" style="pointer-events: auto;"> </iframe></div></aside> </body><link rel="stylesheet" type="text/css" href="styles.css"><style>html, body { width: 100% !important; height: 100% !important; margin-top: 0px; margin: 0}.platform-preview-2 { min-width: 360px !important; margin: 0 auto !important; text-align: center; }</style></html>';
                createFile(path.join(__filename, '..','..','..','out','src','windows.html'), htmlAndroid);
                let uriwindows = vscode.Uri.file(path.join(__filename, '..','..','..','out','src','windows.html'));  
                let success = vscode.commands.executeCommand('vscode.previewHtml', uriwindows, vscode.ViewColumn.Two, 'Ionic Preview - windows').then((success) => {}, 
                (reason) => {
                    vscode.window.showErrorMessage(reason);
                });
            } else {
                vscode.window.showErrorMessage('We did not identify the Ionic serve running on host '+hostIonic+' on port '+portaIonic);                                        
            }
        });    
    });    

    let previewUndefined = vscode.commands.registerCommand('extension.ionic-preview-undefined', async () => {
        lerConf();               
                    
        portNotInUse(portaIonic, hostIonic, function(returnValue) {
            if (returnValue){
                let htmlAndroid = '<!DOCTYPE html><html lang="en"><head><title></title><meta charset="UTF-8"></head><body><iframe id="t1" src="http://localhost:'+portaIonic+'" width="360" height="640" frameborder="0" scrolling="no" style="pointer-events: auto;"> </iframe></body></html>';
                createFile(path.join(__filename, '..','..','..','out','src','undefined.html'), htmlAndroid);
                let uriundefined = vscode.Uri.file(path.join(__filename, '..','..','..','out','src','undefined.html'));  
                let success = vscode.commands.executeCommand('vscode.previewHtml', uriundefined, vscode.ViewColumn.Two, 'Ionic Preview - Without Frame').then((success) => {}, 
                (reason) => {
                    vscode.window.showErrorMessage(reason);
                });
            } else {
                vscode.window.showErrorMessage('We did not identify the Ionic serve running on host '+hostIonic+' on port '+portaIonic);                                  
            }
        });    
    });         

    context.subscriptions.push(previewAndroid);
    context.subscriptions.push(previewIOS);
    context.subscriptions.push(previewWindows);
    context.subscriptions.push(previewUndefined);
}


export function deactivate() {

}